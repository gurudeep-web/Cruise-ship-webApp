 // Common Firebase initialization (only once globally)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Catering order, stationery order, booking functions
function orderCatering() {
    alert('Ordering catering items...');
}

function orderStationery() {
    alert('Ordering stationery items...');
}

function bookResort() {
    alert('Booking movie tickets...');
}

function bookBeautySalon() {
    alert('Booking beauty salon appointment...');
}

function bookFitnessCenter() {
    alert('Booking fitness center time...');
}

function bookPartyHall() {
    alert('Booking party hall...');
}

function manageItems() {
    alert('Managing menu items...');
}

function registerVoyager() {
    alert('Registering a new voyager...');
}

// ---- Manager.js ----
// Manager login functionality
const managerLoginForm = document.getElementById('manager-login-form');
if (managerLoginForm) {
    managerLoginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('manager-email').value;
        const password = document.getElementById('manager-password').value;

        auth.signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                console.log("Manager logged in:", userCredential.user);
                // Show manager dashboard (hide login form, etc.)
            })
            .catch(error => {
                console.error("Error logging in manager:", error.message);
            });
    });
}

// View all bookings (movies, salon, gym, hall)
const viewBookingsBtn = document.getElementById('view-bookings-btn');
const bookingsList = document.getElementById('bookings-list');
if (viewBookingsBtn) {
    viewBookingsBtn.addEventListener('click', () => {
        bookingsList.innerHTML = '';  // Clear previous results
        db.collection('bookings').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    const booking = doc.data();
                    const li = document.createElement('li');
                    li.textContent = `Booking: ${booking.type}, Time: ${booking.time}`;
                    bookingsList.appendChild(li);
                });
            })
            .catch(error => {
                console.error("Error fetching bookings:", error.message);
            });
    });
}

// ---- headcook.js ----
// Head-Cook login functionality
const headCookLoginForm = document.getElementById('headcook-login-form');
if (headCookLoginForm) {
    headCookLoginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('headcook-email').value;
        const password = document.getElementById('headcook-password').value;

        auth.signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                console.log("Head-Cook logged in:", userCredential.user);
                // Show head-cook dashboard
            })
            .catch(error => {
                console.error("Error logging in head-cook:", error.message);
            });
    });
}

// View all catering orders
const viewCateringOrdersBtn = document.getElementById('view-catering-orders-btn');
const cateringOrdersList = document.getElementById('catering-orders-list');
if (viewCateringOrdersBtn) {
    viewCateringOrdersBtn.addEventListener('click', () => {
        cateringOrdersList.innerHTML = '';  // Clear previous results
        db.collection('cateringOrders').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    const order = doc.data();
                    const li = document.createElement('li');
                    li.textContent = `Item: ${order.item}, Quantity: ${order.quantity}`;
                    cateringOrdersList.appendChild(li);
                });
            })
            .catch(error => {
                console.error("Error fetching catering orders:", error.message);
            });
    });
}

// ---- supervisor.js ----
// Supervisor login functionality
const supervisorLoginForm = document.getElementById('supervisor-login-form');
if (supervisorLoginForm) {
    supervisorLoginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('supervisor-email').value;
        const password = document.getElementById('supervisor-password').value;

        auth.signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                console.log("Supervisor logged in:", userCredential.user);
                // Show supervisor dashboard (optional)
            })
            .catch(error => {
                console.error("Error logging in supervisor:", error.message);
            });
    });
}

// View all stationery orders
const viewStationeryOrdersBtn = document.getElementById('view-stationery-orders-btn');
const stationeryOrdersList = document.getElementById('stationery-orders-list');
if (viewStationeryOrdersBtn) {
    viewStationeryOrdersBtn.addEventListener('click', () => {
        stationeryOrdersList.innerHTML = '';  // Clear previous results
        db.collection('stationeryOrders').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    const order = doc.data();
                    const li = document.createElement('li');
                    li.textContent = `Item: ${order.item}, Quantity: ${order.quantity}`;
                    stationeryOrdersList.appendChild(li);
                });
            })
            .catch(error => {
                console.error("Error fetching stationery orders:", error.message);
            });
    });
}

// ---- Common Logout functionality ----
// Ensure only one logout button reference exists
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        auth.signOut()
            .then(() => {
                console.log("User logged out.");
                // Redirect to login page or handle UI
            })
            .catch(error => {
                console.error("Error logging out:", error.message);
            });
    });
}
