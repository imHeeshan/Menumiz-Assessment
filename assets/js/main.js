//collapse function
function openNav() {
  var collpase_section = document.getElementById("collapse-nav");
  if (collpase_section.style.display === "none" || collpase_section.style.display === "") {
    collpase_section.style.display = "flex";
  } else {
    collpase_section.style.display = "none";
  }
}

// when window resize collapse function trigger
window.addEventListener('resize', function () {
  var collpase_section = document.getElementById("logo-section");
  var side_nav = document.getElementById("side-nav");
  if (collpase_section.classList.contains("is-show") || side_nav.classList.contains("is-show")) {
    collpase_section.classList.remove("is-show")
    side_nav.classList.remove("is-show")
  }
});

// select side nav

document.addEventListener("DOMContentLoaded", function () {
  var side_nav = document.getElementById("side-nav");

  if (side_nav) {
    var nav_lists = side_nav.getElementsByClassName("side-nav-list");

    for (var i = 0; i < nav_lists.length; i++) {
      nav_lists[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");

        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }

        this.className += " active";
      });
    }
  } else {
    console.error("Element with id 'side' not found.");
  }
});
function is_toggle() {
  var top_logo_section = document.getElementById("logo-section");
  var collapse_button = document.getElementById("side-nav");
  top_logo_section.classList.toggle("is-show");
  collapse_button.classList.toggle("is-show");

}



// Array of objects
const notifications = [
  {
    id: 1,
    user_name: "Mark Jacobs",
    notification: " has applied for leave and is currently awaiting approval. ",
    time: "Today at 09:42 AM ",
    isRead: false
  },
  {
    id: 2,
    user_name: "Charlie Kristen",
    notification: "has applied for leave and is currently awaiting approval.",
    time: "Today at 08:23 AM",
    isRead: false
  },
  {
    id: 3,
    user_name: "Nur Fariha binti Maslan",
    notification: " has applied for leave and is currently awaiting approval. ",
    time: "Yesterday at 17:30 PM",
    isRead: false
  },
  {
    id: 4,
    user_name: "Nur Fariha binti Maslan",
    notification: " has applied for leave and is currently awaiting approval. ",
    time: "Yesterday at 14:45 PM",
    isRead: true
  },
  {
    id: 5,
    user_name: "Nishant Talwar",
    notification: " has applied for leave and is currently awaiting approval. ",
    time: "Yesterday at 14:42 PM",
    isRead: true
  }
];

document.addEventListener("DOMContentLoaded", function () {
  const notificationList = document.getElementById('notification-list');

  if (notificationList) {
    // Map through the array of objects and create list items
    notifications.forEach(notification => {
      const notificationDot = notification.isRead ? '' : '<div class="notification-dot-active"></div>';
      const listItem = document.createElement('li');
      listItem.className = `list ${notification.isRead ? 'is-read' : ''}`;

      listItem.innerHTML = `
      <div class="notification-container">
        <img src="../assets/img/Avatar_${notification.id}.svg" class="notify-icon" />
          ${notificationDot}
      </div>
      <div class="notify-content">
        <div class="notify-detail">
          <span>${notification.user_name}</span> 
          ${notification.notification}
        </div>
        <div class="notify-time">
          ${notification.time}
        </div>
      </div>
    `;
      notificationList.appendChild(listItem);
    });
  } else {
    console.error("Element with id 'notification-list' not found.");
  }
});

function is_show_notify() {
  var notify = document.getElementById("notify-container");

  notify.classList.toggle("is-show-notifiy");

}
function is_show_leave_details() {
  var leave = document.getElementById("leave-details");

  leave.classList.toggle("is-show-leave");

}
//date picker

document.addEventListener('DOMContentLoaded', function () {
  flatpickr("#date-picker", {
    dateFormat: "F Y", // Format as Month Year
    onChange: function (selectedDates, dateStr, instance) {
      document.getElementById('selected-date').textContent = dateStr;
    }
  });

  document.getElementById('date-icon').addEventListener('click', function () {
    document.querySelector("#date-picker").focus(); // Use focus() to open the date picker
    console.log("Date picker triggered");
  });
});

// Array of objects leave-requests
const leave_requests = [
  {
    id: 1,
    user_name: "Mark Jacobs",
    period: { to: "31 Mar, 2023 09:00 AM", from: '31 Mar, 2023 18:00 PM' },
    days: 1,
    leave_type: 'Annual Leave',
    isApproved: false
  },
  {
    id: 2,
    user_name: "Charlie Kristen",
    period: { to: "10 Apr, 2023 09:00 AM", from: '11 Apr, 2023 18:00 PM' },
    days: 2,
    leave_type: 'Annual Leave',
    isApproved: false
  },
  {
    id: 3,
    user_name: "Nur Fariha binti Maslan",
    period: { to: "31 Mar, 2023 09:00 AM", from: '31 Mar, 2023 18:00 PM' },
    days: 2,
    leave_type: 'Hospital Leave',
    isApproved: false
  },
  {
    id: 4,
    user_name: "Nur Fariha binti Maslan",
    period: { to: "31 Mar, 2023 09:00 AM", from: '31 Mar, 2023 18:00 PM' },
    days: 1.5,
    leave_type: 'Sick Leave',
    isApproved: true
  },
  {
    id: 5,
    user_name: "Nishant Talwar",
    period: { to: "31 Mar, 2023 09:00 AM", from: '31 Mar, 2023 18:00 PM' },
    days: 0.5,
    leave_type: 'Sick Leave',
    isApproved: true
  }
];


// table append
document.addEventListener("DOMContentLoaded", function () {
  const notificationList = document.getElementById('leave-list-placeholder');

  if (notificationList) {
    // Map through the array of objects and create list items
    leave_requests.forEach(leave => {
      const notificationDot = leave.isApproved ? '<div class="is-approved notification-dot-active"></div>' : '<div class=" notification-dot-active"></div>';
      const listItem = document.createElement('tr');

      listItem.innerHTML = `
        <td >  
          <span class="td-data check-content"> 
            <input type="checkbox" id="check-all" name="check-all"> 
            ${notificationDot}
         </span>
         </td>
        <td>
          <span class="td-data user">
          <img src="../assets/img/Avatar_${leave.id}.svg" class="notify-icon" />
          <p>  ${leave.user_name.length > 30 ? leave.user_name.slice(0, 30) + '...' : leave.user_name}</p>
          </span>
          </td>
        <td >
         <span class="td-data">
         <p>${leave.period.from}</p>
         <p>${leave.period.to}</p>
         </span>
        </td>
        <td >
        <span class="td-data">
        ${leave.days}
        </span>
        </td>
        <td >
        <span class="td-data">
        ${leave.leave_type}
        </span>
        </td>
        <td >
         <span class="td-data action">
        <a href="" class="btn">Reject</a>
        <a href="" class="btn">Approve</a>
        <img src="../assets/img/right.svg" onclick="is_show_leave_details()" class="right-arrow"  />
        </span>
        </td>
                                  
    `;
      notificationList.appendChild(listItem);
    });
  } else {
    console.error("Element with id 'notification-list' not found.");
  }
});


// Array of objects leave-requests
const approvel_level = [
  {
    id: 1,
    user_name: "Simon Minter",
    designation: "Human Resources",
    isApproved: false,
    approval_date: '',

  },
  {
    id: 2,
    user_name: "Simon Minter",
    designation: "Head of UX Design",
    isApproved: false,
    approval_date: '',
  },
  {
    id: 3,
    user_name: "Charlie Kristen",
    designation: "Senior UX Designer",
    isApproved: true,
    approval_date: '03 Mar 2023, 17:30 AM',
  },

];

// table append
document.addEventListener("DOMContentLoaded", function () {
  const apporval_level_container = document.getElementById('approvel-level');

  if (apporval_level_container) {
    // Map through the array of objects and create list items
    approvel_level.forEach(approvel_ => {
      const notificationDot = approvel_.isApproved ? '<div class="is-approved notification-dot-active"></div>' : '<div class=" notification-dot-active"></div>';
      const listItem = document.createElement('div');
      const leave_sts = approvel_.isApproved ? ` <p>${ approvel_.approval_date}</p>`:` <p class="pending-sts">Pending Approvel</p>`;
      listItem.innerHTML = `
        <div class="approval-container">
        ${notificationDot}
                        <img src="./assets/img/Avatar_${approvel_.id}.svg" alt="">
                        <div class="approval-sts">
                            <div class="approved-user">
                                <p>Name</p>
                                <p>${approvel_.user_name}</p>
                            </div>
                            <div class="approved-user">
                                <p>DESIGNATION</p>
                                <p>${approvel_.designation}</p>
                            </div>
                            <div class="approved-user">
                                <p>APPROVED</p>
                              ${leave_sts}
                            </div>
                        </div>
                    </div>
                                  
    `;
      apporval_level_container.appendChild(listItem);
    });
  } else {
    console.error("Element with id 'notification-list' not found.");
  }
});


function handle_apporve(){
  const apporvel_alert = document.getElementById('alert-overlay');
  apporvel_alert.classList.toggle("is-show-alert");

}