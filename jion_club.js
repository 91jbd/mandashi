// 模拟社团数据
const clubs = [
    { name: "编程俱乐部", description: "专注于编程技能的学习和交流。" },
    { name: "艺术协会", description: "热爱艺术的同学们聚集的地方。" },
    { name: "体育联合会", description: "组织各类体育活动，增强体质。" },
    { name: "文学社", description: "分享文学作品，提升人文素养。" }
];

// 模拟已申请的社团列表
let applications = [];

function populateClubSelect() {
    const clubSelect = document.getElementById('clubSelect');
    clubs.forEach(club => {
        const option = document.createElement('option');
        option.value = club.name;
        option.textContent = club.name;
        clubSelect.appendChild(option);
    });
}

function displayApplications(applicationArray) {
    const applicationListElement = document.getElementById('applicationList');
    applicationListElement.innerHTML = ''; // 清空现有内容

    applicationArray.forEach(app => {
        const applicationItem = document.createElement('li');
        applicationItem.className = 'application-item';
        applicationItem.innerHTML = `
            <h3>${app.studentName} - ${app.clubName}</h3>
            <p>学号: ${app.studentID}, 邮箱: ${app.studentEmail}</p>
        `;
        applicationListElement.appendChild(applicationItem);
    });
}

// 初始填充社团选择下拉菜单
populateClubSelect();

// 提交申请表单
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const studentName = document.getElementById('studentName').value.trim();
    const studentID = document.getElementById('studentID').value.trim();
    const studentEmail = document.getElementById('studentEmail').value.trim();
    const clubName = document.getElementById('clubSelect').value;

    if (studentName && studentID && studentEmail && clubName) {
        applications.push({ studentName, studentID, studentEmail, clubName });
        displayApplications(applications);
        document.getElementById('studentForm').reset();
    } else {
        alert("请输入完整的申请信息");
    }
});