// Example member data for each clan
const clan1Members = [
    { name: "Member 1", imageUrl: "https://x.com/JoeeMars1990/photo" },
    { name: "Member 2", imageUrl: "https://randomuser.me/api/portraits/women/2.jpg" },
];

const clan2Members = [
    { name: "Member 3", imageUrl: "https://randomuser.me/api/portraits/men/3.jpg" },
    { name: "Member 4", imageUrl: "https://randomuser.me/api/portraits/women/4.jpg" },
];

const clan3Members = [
    { name: "Member 5", imageUrl: "https://randomuser.me/api/portraits/men/5.jpg" },
    { name: "Member 6", imageUrl: "https://randomuser.me/api/portraits/women/6.jpg" },
];

// Function to render members
function renderMembers(clanId, members) {
    const clanElement = document.getElementById(clanId);
    const membersGrid = clanElement.querySelector('.members-grid');
    
    members.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.classList.add('member');
        
        const img = document.createElement('img');
        img.src = member.imageUrl;
        img.alt = member.name;

        const name = document.createElement('div');
        name.classList.add('member-name');
        name.textContent = member.name;
        
        memberDiv.appendChild(img);
        memberDiv.appendChild(name);
        membersGrid.appendChild(memberDiv);
    });
}

// Render members for each clan
renderMembers('clan1', clan1Members);
renderMembers('clan2', clan2Members);
renderMembers('clan3', clan3Members);
