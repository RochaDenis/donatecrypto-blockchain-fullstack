// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

struct Campaign {
    address author;
    string title;
    string description;
    string videoUrl;
    string imageUrl;
    uint256 balance;
    bool active;
    uint256 supporters; // novo: total de doadores
}

contract DonateCrypto {
    uint256 public fee = 100; // taxa para saque
    uint256 public nextId = 0;
    address public admin;

    mapping(uint256 => Campaign) public campaigns;
    mapping(uint256 => mapping(address => bool)) public hasDonated; // previne doador duplicado

    constructor() {
        admin = msg.sender;
    }

    // Criar campanha
    function addCampaign(
        string calldata title,
        string calldata description,
        string calldata videoUrl,
        string calldata imageUrl
    ) public {
        nextId++;
        campaigns[nextId] = Campaign({
            title: title,
            description: description,
            videoUrl: videoUrl,
            imageUrl: imageUrl,
            author: msg.sender,
            balance: 0,
            active: true,
            supporters: 0
        });
    }

    // Doar para campanha
    function donate(uint256 id) public payable {
        require(msg.value > 0, "You must send a donation value > 0");
        require(campaigns[id].active == true, "Cannot donate to this campaign");

        campaigns[id].balance += msg.value;

        // contar apoiador apenas 1x por carteira
        if (!hasDonated[id][msg.sender]) {
            hasDonated[id][msg.sender] = true;
            campaigns[id].supporters++;
        }
    }

    // Retirar valor da campanha
    function withdraw(uint256 id) public {
        Campaign storage campaign = campaigns[id];
        require(campaign.author == msg.sender, "You do not have permission");
        require(campaign.active == true, "This campaign is closed");
        require(campaign.balance > fee, "Not enough balance");

        address payable recipient = payable(campaign.author);
        (bool success, ) = recipient.call{value: campaign.balance - fee}("");
        require(success, "Transfer failed");

        campaign.active = false;
        campaign.balance = 0;
    }

    // Editar campanha (apenas autor e se ainda estiver ativa)
    function editCampaign(
        uint256 id,
        string calldata newTitle,
        string calldata newDescription,
        string calldata newVideoUrl,
        string calldata newImageUrl
    ) public {
        Campaign storage campaign = campaigns[id];
        require(msg.sender == campaign.author, "Only author can edit");
        require(campaign.active, "Campaign must be active");

        campaign.title = newTitle;
        campaign.description = newDescription;
        campaign.videoUrl = newVideoUrl;
        campaign.imageUrl = newImageUrl;
    }

    // Retornar as 5 campanhas mais recentes
    function getLastFiveCampaigns() public view returns (Campaign[] memory) {
        uint256 count = nextId < 5 ? nextId : 5;
        Campaign[] memory recent = new Campaign[](count);
        for (uint256 i = 0; i < count; i++) {
            recent[i] = campaigns[nextId - i];
        }
        return recent;
    }

    // Função para o admin sacar taxa acumulada
    function adminWithdraw() public {
        require(msg.sender == admin, "Only admin can withdraw");
        payable(admin).transfer(address(this).balance);
    }
}
