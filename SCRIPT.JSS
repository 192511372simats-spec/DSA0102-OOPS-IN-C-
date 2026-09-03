/* =========================================================
   SMART HOSPITAL PATIENT & MEDICAL EQUIPMENT MANAGEMENT
   SCRIPT.JS
   ========================================================= */


/* =========================================================
   INITIAL DATA
   ========================================================= */

let patients = [
    {
        id: "P001",
        name: "Arun Kumar",
        age: 45,
        department: "Cardiology",
        priority: "High",
        status: "Admitted",
        bed: "B101"
    },
    {
        id: "P002",
        name: "Priya Sharma",
        age: 32,
        department: "General",
        priority: "Normal",
        status: "Admitted",
        bed: "B102"
    },
    {
        id: "P003",
        name: "Rahul Raj",
        age: 61,
        department: "ICU",
        priority: "Critical",
        status: "Emergency",
        bed: "ICU01"
    }
];


let doctors = [
    {
        id: "D001",
        name: "Dr. Arfin",
        department: "Cardiology",
        specialization: "Heart Specialist",
        status: "Available"
    },
    {
        id: "D002",
        name: "Dr. Meena",
        department: "Neurology",
        specialization: "Neurologist",
        status: "Available"
    },
    {
        id: "D003",
        name: "Dr. Karthik",
        department: "General",
        specialization: "General Physician",
        status: "Busy"
    },
    {
        id: "D004",
        name: "Dr. Priya",
        department: "Gynaecology",
        specialization: "Gynaecologist",
        status: "Available"
    },
    {
        id: "D005",
        name: "Dr. Naveen",
        department: "Emergency",
        specialization: "Emergency Specialist",
        status: "Available"
    },
    {
        id: "D006",
        name: "Dr. Divya",
        department: "ICU",
        specialization: "Critical Care",
        status: "Busy"
    }
];


let beds = [
    {
        id: "B101",
        ward: "General Ward",
        type: "General",
        patient: "Arun Kumar",
        status: "Occupied"
    },
    {
        id: "B102",
        ward: "General Ward",
        type: "General",
        patient: "Priya Sharma",
        status: "Occupied"
    },
    {
        id: "B103",
        ward: "General Ward",
        type: "General",
        patient: "",
        status: "Available"
    },
    {
        id: "B104",
        ward: "General Ward",
        type: "General",
        patient: "",
        status: "Available"
    },
    {
        id: "ICU01",
        ward: "ICU",
        type: "ICU",
        patient: "Rahul Raj",
        status: "Occupied"
    },
    {
        id: "ICU02",
        ward: "ICU",
        type: "ICU",
        patient: "",
        status: "Available"
    },
    {
        id: "E01",
        ward: "Emergency",
        type: "Emergency",
        patient: "",
        status: "Available"
    },
    {
        id: "E02",
        ward: "Emergency",
        type: "Emergency",
        patient: "",
        status: "Available"
    },
    {
        id: "G01",
        ward: "Gynaecology",
        type: "Gynaecology",
        patient: "",
        status: "Available"
    },
    {
        id: "G02",
        ward: "Gynaecology",
        type: "Gynaecology",
        patient: "",
        status: "Available"
    }
];


let equipment = [
    {
        id: "EQ001",
        name: "Ventilator",
        category: "Ventilator",
        department: "ICU",
        status: "In Use"
    },
    {
        id: "EQ002",
        name: "Patient Monitor",
        category: "Monitoring",
        department: "ICU",
        status: "Available"
    },
    {
        id: "EQ003",
        name: "ECG Machine",
        category: "Monitoring",
        department: "Cardiology",
        status: "Available"
    },
    {
        id: "EQ004",
        name: "X-Ray Machine",
        category: "Imaging",
        department: "Radiology",
        status: "In Use"
    },
    {
        id: "EQ005",
        name: "Ultrasound",
        category: "Imaging",
        department: "Gynaecology",
        status: "Maintenance"
    },
    {
        id: "EQ006",
        name: "Defibrillator",
        category: "Emergency",
        department: "Emergency",
        status: "Available"
    }
];


let appointments = [
    {
        patient: "Arun Kumar",
        doctor: "Dr. Arfin",
        department: "Cardiology",
        date: "2026-09-03",
        time: "10:00",
        status: "Upcoming"
    },
    {
        patient: "Priya Sharma",
        doctor: "Dr. Karthik",
        department: "General",
        date: "2026-09-03",
        time: "11:30",
        status: "Upcoming"
    },
    {
        patient: "Rahul Raj",
        doctor: "Dr. Divya",
        department: "ICU",
        date: "2026-09-03",
        time: "09:00",
        status: "Completed"
    }
];


/* =========================================================
   SAVE DATA
   ========================================================= */

function saveData() {

    localStorage.setItem(
        "hospitalPatients",
        JSON.stringify(patients)
    );

    localStorage.setItem(
        "hospitalDoctors",
        JSON.stringify(doctors)
    );

    localStorage.setItem(
        "hospitalBeds",
        JSON.stringify(beds)
    );

    localStorage.setItem(
        "hospitalEquipment",
        JSON.stringify(equipment)
    );

    localStorage.setItem(
        "hospitalAppointments",
        JSON.stringify(appointments)
    );
}


/* =========================================================
   LOAD DATA
   ========================================================= */

function loadData() {

    const savedPatients =
        localStorage.getItem("hospitalPatients");

    const savedDoctors =
        localStorage.getItem("hospitalDoctors");

    const savedBeds =
        localStorage.getItem("hospitalBeds");

    const savedEquipment =
        localStorage.getItem("hospitalEquipment");

    const savedAppointments =
        localStorage.getItem("hospitalAppointments");


    if (savedPatients) {
        patients = JSON.parse(savedPatients);
    }

    if (savedDoctors) {
        doctors = JSON.parse(savedDoctors);
    }

    if (savedBeds) {
        beds = JSON.parse(savedBeds);
    }

    if (savedEquipment) {
        equipment = JSON.parse(savedEquipment);
    }

    if (savedAppointments) {
        appointments = JSON.parse(savedAppointments);
    }
}


/* =========================================================
   PAGE NAVIGATION
   ========================================================= */

function showPage(pageName) {

    const pages =
        document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });


    const selected =
        document.getElementById(pageName);

    if (selected) {
        selected.classList.add("active");
    }


    const menus =
        document.querySelectorAll(".menu");

    menus.forEach(menu => {
        menu.classList.remove("active");
    });


    menus.forEach(menu => {

        const text =
            menu.innerText.toLowerCase();

        if (
            (pageName === "dashboard" &&
                text.includes("overview")) ||

            (pageName === "patients" &&
                text.includes("patients")) ||

            (pageName === "doctors" &&
                text.includes("doctors")) ||

            (pageName === "beds" &&
                text.includes("bed")) ||

            (pageName === "equipment" &&
                text.includes("equipment")) ||

            (pageName === "appointments" &&
                text.includes("appointment")) ||

            (pageName === "emergency" &&
                text.includes("emergency")) ||

            (pageName === "reports" &&
                text.includes("reports"))
        ) {
            menu.classList.add("active");
        }

    });


    if (pageName === "patients") {
        renderPatients();
    }

    if (pageName === "doctors") {
        renderDoctors();
    }

    if (pageName === "beds") {
        renderBeds();
    }

    if (pageName === "equipment") {
        renderEquipment();
    }

    if (pageName === "appointments") {
        renderAppointments();
    }

    if (pageName === "emergency") {
        renderEmergency();
    }

    if (pageName === "reports") {
        renderReports();
    }

}


/* =========================================================
   DASHBOARD UPDATE
   ========================================================= */

function updateDashboard() {

    const totalPatients =
        document.getElementById("totalPatients");

    const totalDoctors =
        document.getElementById("totalDoctors");

    const totalBeds =
        document.getElementById("totalBeds");

    const totalEquipment =
        document.getElementById("totalEquipment");


    if (totalPatients) {
        totalPatients.innerText =
            patients.length;
    }

    if (totalDoctors) {
        totalDoctors.innerText =
            doctors.length;
    }

    if (totalBeds) {
        totalBeds.innerText =
            beds.length;
    }


    if (totalEquipment) {
        totalEquipment.innerText =
            equipment.length;
    }


    const available =
        beds.filter(
            bed => bed.status === "Available"
        ).length;


    const availableBeds =
        document.getElementById("availableBeds");

    if (availableBeds) {

        availableBeds.innerText =
            available + " available";

    }


    const maintenance =
        equipment.filter(
            item => item.status === "Maintenance"
        ).length;


    const maintenanceCount =
        document.getElementById("maintenanceCount");

    if (maintenanceCount) {

        maintenanceCount.innerText =
            maintenance + " maintenance";

    }


    updateOccupancy();

    updateAppointmentChart();

    updateAppointmentDropdowns();

}


/* =========================================================
   BED OCCUPANCY
   ========================================================= */

function updateOccupancy() {

    if (beds.length === 0) {
        return;
    }


    const occupied =
        beds.filter(
            bed => bed.status === "Occupied"
        ).length;


    const percentage =
        Math.round(
            (occupied / beds.length) * 100
        );


    const occupancy =
        document.getElementById("occupancy");

    if (occupancy) {

        occupancy.innerText =
            percentage + "%";

    }


    const donut =
        document.querySelector(".donut");

    if (donut) {

        const occupiedDegree =
            percentage * 3.6;

        donut.style.background =
            `conic-gradient(
                #2864e8 0deg,
                #2864e8 ${occupiedDegree}deg,
                #e6ebf2 ${occupiedDegree}deg,
                #e6ebf2 360deg
            )`;

    }

}


/* =========================================================
   APPOINTMENT CHART
   ========================================================= */

function updateAppointmentChart() {

    const chart =
        document.getElementById(
            "appointmentChart"
        );

    if (!chart) {
        return;
    }


    const upcoming =
        appointments.filter(
            a => a.status === "Upcoming"
        ).length;


    const completed =
        appointments.filter(
            a => a.status === "Completed"
        ).length;


    const cancelled =
        appointments.filter(
            a => a.status === "Cancelled"
        ).length;


    const values = [
        upcoming,
        completed,
        cancelled
    ];


    const max =
        Math.max(...values, 1);


    chart.innerHTML = "";


    values.forEach((value, index) => {

        const group =
            document.createElement("div");

        group.className = "bar-group";


        const bar =
            document.createElement("div");

        bar.className = "bar " +
            (
                index === 0
                    ? "blue"
                    : index === 1
                        ? "green"
                        : "red"
            );


        const height =
            Math.max(
                10,
                (value / max) * 150
            );


        bar.style.height =
            height + "px";


        const label =
            document.createElement("div");

        label.className = "bar-label";


        const names = [
            "Upcoming",
            "Completed",
            "Cancelled"
        ];


        label.innerText =
            names[index] +
            " (" + value + ")";


        group.appendChild(bar);

        group.appendChild(label);

        chart.appendChild(group);

    });

}


/* =========================================================
   PATIENT MANAGEMENT
   ========================================================= */

function renderPatients() {

    const table =
        document.getElementById(
            "patientTable"
        );

    if (!table) {
        return;
    }


    if (patients.length === 0) {

        table.innerHTML =
            `<tr>
                <td colspan="7" class="empty">
                    No patients registered
                </td>
            </tr>`;

        return;
    }


    table.innerHTML =
        patients.map(patient => {

            const priorityClass =
                patient.priority.toLowerCase();


            return `
                <tr>

                    <td>
                        <b>${patient.id}</b>
                    </td>

                    <td>
                        ${patient.name}
                    </td>

                    <td>
                        ${patient.age}
                    </td>

                    <td>
                        ${patient.department}
                    </td>

                    <td>
                        <span class="priority-${priorityClass}">
                            ${patient.priority}
                        </span>
                    </td>

                    <td>
                        <span class="status ${
                            patient.status === "Discharged"
                                ? "cancelled"
                                : patient.status === "Emergency"
                                    ? "maintenance"
                                    : "available"
                        }">
                            ${patient.status}
                        </span>
                    </td>

                    <td>

                        ${
                            patient.status !== "Discharged"

                            ?

                            `<button
                                class="action-btn"
                                onclick="dischargePatient('${patient.id}')">
                                Discharge
                            </button>`

                            :

                            `<span style="color:#999">
                                Completed
                            </span>`
                        }

                    </td>

                </tr>
            `;

        }).join("");

}


/* =========================================================
   SEARCH PATIENTS
   ========================================================= */

function searchPatients() {

    const input =
        document.getElementById(
            "patientSearch"
        );

    if (!input) {
        return;
    }


    const query =
        input.value.toLowerCase();


    const rows =
        document.querySelectorAll(
            "#patientTable tr"
        );


    rows.forEach(row => {

        const text =
            row.innerText.toLowerCase();

        row.style.display =
            text.includes(query)
                ? ""
                : "none";

    });

}


/* =========================================================
   OPEN PATIENT FORM
   ========================================================= */

function openPatientForm() {

    const modal =
        document.getElementById(
            "patientModal"
        );

    if (modal) {
        modal.classList.add("show");
    }

}


/* =========================================================
   REGISTER PATIENT
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const form =
            document.getElementById(
                "patientForm"
            );


        if (!form) {
            return;
        }


        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const data =
                    new FormData(form);


                const name =
                    data.get("name").trim();


                const age =
                    Number(data.get("age"));


                const department =
                    data.get("department");


                const priority =
                    data.get("priority");


                if (!name || age < 0) {

                    showToast(
                        "Please enter valid patient details"
                    );

                    return;
                }


                const newId =
                    generateId(
                        "P",
                        patients
                    );


                let status =
                    priority === "Critical"
                        ? "Emergency"
                        : "Admitted";


                const patient = {

                    id: newId,

                    name: name,

                    age: age,

                    department: department,

                    priority: priority,

                    status: status,

                    bed: ""

                };


                patients.push(patient);


                /* Automatically allocate bed */

                const allocatedBed =
                    allocateBed(patient);


                if (allocatedBed) {

                    patient.bed =
                        allocatedBed.id;

                    allocatedBed.patient =
                        patient.name;

                    allocatedBed.status =
                        "Occupied";

                }


                saveData();

                updateDashboard();

                renderPatients();


                form.reset();

                closeModal(
                    "patientModal"
                );


                showToast(
                    "Patient registered successfully"
                );

            }
        );

    }
);


/* =========================================================
   BED ALLOCATION
   ========================================================= */

function allocateBed(patient) {

    let preferredTypes = [];


    if (
        patient.priority === "Critical" ||
        patient.department === "ICU"
    ) {

        preferredTypes = [
            "ICU",
            "Emergency",
            "General"
        ];

    }

    else if (
        patient.department === "Emergency"
    ) {

        preferredTypes = [
            "Emergency",
            "General"
        ];

    }

    else if (
        patient.department === "Gynaecology"
    ) {

        preferredTypes = [
            "Gynaecology",
            "General"
        ];

    }

    else {

        preferredTypes = [
            "General",
            "Emergency"
        ];

    }


    for (
        let type of preferredTypes
    ) {

        const bed =
            beds.find(
                b =>
                    b.status === "Available" &&
                    b.type === type
            );


        if (bed) {

            return bed;

        }

    }


    return null;

}


/* =========================================================
   DISCHARGE PATIENT
   ========================================================= */

function dischargePatient(patientId) {

    const patient =
        patients.find(
            p => p.id === patientId
        );


    if (!patient) {
        return;
    }


    /* Release patient's bed */

    if (patient.bed) {

        const bed =
            beds.find(
                b => b.id === patient.bed
            );


        if (bed) {

            bed.status =
                "Available";

            bed.patient =
                "";

        }

    }


    patient.status =
        "Discharged";


    patient.bed =
        "";


    saveData();

    updateDashboard();

    renderPatients();

    renderBeds();


    showToast(
        "Patient discharged and bed released"
    );

}


/* =========================================================
   DOCTOR MANAGEMENT
   ========================================================= */

function renderDoctors() {

    const grid =
        document.getElementById(
            "doctorGrid"
        );


    if (!grid) {
        return;
    }


    grid.innerHTML =
        doctors.map(doctor => {

            return `
                <div class="doctor-card">

                    <div class="doctor-top">

                        <div class="doctor-avatar">
                            ${getInitials(doctor.name)}
                        </div>

                        <div>

                            <h3>
                                ${doctor.name}
                            </h3>

                            <p>
                                ${doctor.specialization}
                            </p>

                        </div>

                    </div>


                    <div class="doctor-info">

                        <div>
                            <span>Department</span>
                            <span>
                                ${doctor.department}
                            </span>
                        </div>

                        <div>
                            <span>Doctor ID</span>
                            <span>
                                ${doctor.id}
                            </span>
                        </div>

                        <div>
                            <span>Status</span>

                            <span class="status ${
                                doctor.status === "Available"
                                    ? "available"
                                    : "occupied"
                            }">
                                ${doctor.status}
                            </span>

                        </div>

                    </div>

                </div>
            `;

        }).join("");

}


/* =========================================================
   BED MANAGEMENT
   ========================================================= */

function renderBeds() {

    const table =
        document.getElementById(
            "bedTable"
        );


    const summary =
        document.getElementById(
            "bedSummary"
        );


    if (!table) {
        return;
    }


    /* BED SUMMARY */

    if (summary) {

        const wards = [
            "General",
            "ICU",
            "Emergency",
            "Gynaecology"
        ];


        summary.innerHTML =
            wards.map(type => {

                const total =
                    beds.filter(
                        b => b.type === type
                    ).length;


                const available =
                    beds.filter(
                        b =>
                            b.type === type &&
                            b.status === "Available"
                    ).length;


                return `
                    <div class="bed-box">

                        <h3>
                            ${type}
                        </h3>

                        <strong>
                            ${available}/${total}
                        </strong>

                        <p>
                            Beds Available
                        </p>

                    </div>
                `;

            }).join("");

    }


    /* BED TABLE */

    table.innerHTML =
        beds.map(bed => {

            return `
                <tr>

                    <td>
                        <b>${bed.id}</b>
                    </td>

                    <td>
                        ${bed.ward}
                    </td>

                    <td>
                        ${bed.type}
                    </td>

                    <td>
                        ${
                            bed.patient ||
                            '<span style="color:#999">None</span>'
                        }
                    </td>

                    <td>

                        <span class="status ${
                            bed.status === "Available"
                                ? "available"
                                : "occupied"
                        }">

                            ${bed.status}

                        </span>

                    </td>

                    <td>

                        ${
                            bed.status === "Occupied"

                            ?

                            `<button
                                class="action-btn"
                                onclick="releaseBed('${bed.id}')">
                                Release
                            </button>`

                            :

                            `<button
                                class="action-btn"
                                onclick="showToast('Bed ${bed.id} is available for allocation')">
                                Allocate
                            </button>`
                        }

                    </td>

                </tr>
            `;

        }).join("");

}


/* =========================================================
   RELEASE BED
   ========================================================= */

function releaseBed(bedId) {

    const bed =
        beds.find(
            b => b.id === bedId
        );


    if (!bed) {
        return;
    }


    const patient =
        patients.find(
            p => p.name === bed.patient
        );


    if (patient) {

        patient.bed = "";

    }


    bed.patient = "";

    bed.status = "Available";


    saveData();

    updateDashboard();

    renderBeds();

    renderPatients();


    showToast(
        "Bed released successfully"
    );

}


/* =========================================================
   EQUIPMENT MANAGEMENT
   ========================================================= */

function renderEquipment() {

    const grid =
        document.getElementById(
            "equipmentGrid"
        );


    if (!grid) {
        return;
    }


    if (equipment.length === 0) {

        grid.innerHTML =
            `<div class="card">
                No equipment available.
            </div>`;

        return;
    }


    grid.innerHTML =
        equipment.map(item => {

            return `
                <div class="equipment-card">

                    <div class="equipment-icon">
                        ⚙
                    </div>

                    <h3>
                        ${item.name}
                    </h3>

                    <p>
                        ${item.category}
                    </p>

                    <div class="equipment-details">

                        <div>

                            <small>
                                Department
                            </small>

                            <br>

                            <b>
                                ${item.department}
                            </b>

                        </div>


                        <div>

                            <span class="status ${
                                item.status === "Available"
                                    ? "available"
                                    : item.status === "In Use"
                                        ? "in-use"
                                        : "maintenance"
                            }">

                                ${item.status}

                            </span>

                        </div>

                    </div>


                    <br>


                    <button
                        class="action-btn"
                        onclick="cycleEquipmentStatus('${item.id}')">

                        Change Status

                    </button>

                </div>
            `;

        }).join("");

}


/* =========================================================
   OPEN EQUIPMENT FORM
   ========================================================= */

function openEquipmentForm() {

    const modal =
        document.getElementById(
            "equipmentModal"
        );


    if (modal) {

        modal.classList.add("show");

    }

}


/* =========================================================
   ADD EQUIPMENT
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const form =
            document.getElementById(
                "equipmentForm"
            );


        if (!form) {
            return;
        }


        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const data =
                    new FormData(form);


                const name =
                    data.get("name").trim();


                const category =
                    data.get("category");


                const department =
                    data.get("department").trim();


                const status =
                    data.get("status");


                if (
                    !name ||
                    !department
                ) {

                    showToast(
                        "Please enter valid equipment details"
                    );

                    return;
                }


                equipment.push({

                    id: generateId(
                        "EQ",
                        equipment
                    ),

                    name: name,

                    category: category,

                    department: department,

                    status: status

                });


                saveData();

                updateDashboard();

                renderEquipment();


                form.reset();

                closeModal(
                    "equipmentModal"
                );


                showToast(
                    "Medical equipment added successfully"
                );

            }
        );

    }
);


/* =========================================================
   CHANGE EQUIPMENT STATUS
   ========================================================= */

function cycleEquipmentStatus(id) {

    const item =
        equipment.find(
            e => e.id === id
        );


    if (!item) {
        return;
    }


    if (item.status === "Available") {

        item.status =
            "In Use";

    }

    else if (item.status === "In Use") {

        item.status =
            "Maintenance";

    }

    else {

        item.status =
            "Available";

    }


    saveData();

    updateDashboard();

    renderEquipment();


    showToast(
        `${item.name} status changed to ${item.status}`
    );

}


/* =========================================================
   APPOINTMENT MANAGEMENT
   ========================================================= */

function renderAppointments() {

    const table =
        document.getElementById(
            "appointmentTable"
        );


    if (!table) {
        return;
    }


    if (appointments.length === 0) {

        table.innerHTML =
            `<tr>
                <td colspan="7" class="empty">
                    No appointments scheduled
                </td>
            </tr>`;

        return;

    }


    table.innerHTML =
        appointments.map(
            (appointment, index) => {

                const statusClass =
                    appointment.status === "Completed"
                        ? "completed"
                        : appointment.status === "Cancelled"
                            ? "cancelled"
                            : "pending";


                return `
                    <tr>

                        <td>
                            ${appointment.patient}
                        </td>

                        <td>
                            ${appointment.doctor}
                        </td>

                        <td>
                            ${appointment.department}
                        </td>

                        <td>
                            ${appointment.date}
                        </td>

                        <td>
                            ${appointment.time}
                        </td>

                        <td>

                            <span class="status ${statusClass}">
                                ${appointment.status}
                            </span>

                        </td>

                        <td>

                            ${
                                appointment.status === "Upcoming"

                                ?

                                `<button
                                    class="action-btn"
                                    onclick="completeAppointment(${index})">
                                    Complete
                                </button>`

                                :

                                `<span style="color:#999">
                                    ${appointment.status}
                                </span>`
                            }

                        </td>

                    </tr>
                `;

            }
        ).join("");

}


/* =========================================================
   OPEN APPOINTMENT FORM
   ========================================================= */

function openAppointmentForm() {

    updateAppointmentDropdowns();


    const modal =
        document.getElementById(
            "appointmentModal"
        );


    if (modal) {

        modal.classList.add("show");

    }

}


/* =========================================================
   APPOINTMENT DROPDOWNS
   ========================================================= */

function updateAppointmentDropdowns() {

    const patientSelect =
        document.getElementById(
            "appointmentPatient"
        );


    const doctorSelect =
        document.getElementById(
            "appointmentDoctor"
        );


    if (patientSelect) {

        patientSelect.innerHTML =
            patients
                .filter(
                    p => p.status !== "Discharged"
                )
                .map(
                    p =>
                        `<option value="${p.name}">
                            ${p.name}
                        </option>`
                )
                .join("");

    }


    if (doctorSelect) {

        doctorSelect.innerHTML =
            doctors
                .map(
                    d =>
                        `<option value="${d.name}">
                            ${d.name} - ${d.department}
                        </option>`
                )
                .join("");

    }

}


/* =========================================================
   CREATE APPOINTMENT
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const form =
            document.getElementById(
                "appointmentForm"
            );


        if (!form) {
            return;
        }


        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const data =
                    new FormData(form);


                const patient =
                    data.get("patient");


                const doctor =
                    data.get("doctor");


                const date =
                    data.get("date");


                const time =
                    data.get("time");


                if (
                    !patient ||
                    !doctor ||
                    !date ||
                    !time
                ) {

                    showToast(
                        "Please complete all appointment details"
                    );

                    return;
                }


                const doctorData =
                    doctors.find(
                        d => d.name === doctor
                    );


                appointments.push({

                    patient: patient,

                    doctor: doctor,

                    department:
                        doctorData
                            ? doctorData.department
                            : "General",

                    date: date,

                    time: time,

                    status: "Upcoming"

                });


                saveData();

                updateDashboard();

                renderAppointments();


                form.reset();

                closeModal(
                    "appointmentModal"
                );


                showToast(
                    "Appointment created successfully"
                );

            }
        );

    }
);


/* =========================================================
   COMPLETE APPOINTMENT
   ========================================================= */

function completeAppointment(index) {

    if (
        !appointments[index]
    ) {
        return;
    }


    appointments[index].status =
        "Completed";


    saveData();

    updateDashboard();

    renderAppointments();


    showToast(
        "Appointment marked as completed"
    );

}


/* =========================================================
   EMERGENCY MANAGEMENT
   ========================================================= */

function renderEmergency() {

    const table =
        document.getElementById(
            "emergencyTable"
        );


    if (!table) {
        return;
    }


    const emergencyPatients =
        patients
            .filter(
                p =>
                    p.priority === "Critical" ||
                    p.priority === "High"
            )
            .sort(
                (a, b) =>
                    priorityValue(b.priority) -
                    priorityValue(a.priority)
            );


    if (emergencyPatients.length === 0) {

        table.innerHTML =
            `<tr>
                <td colspan="6" class="empty">
                    No emergency patients
                </td>
            </tr>`;

        return;

    }


    table.innerHTML =
        emergencyPatients
            .map((patient, index) => {

                const doctor =
                    doctors.find(
                        d =>
                            d.department ===
                            patient.department &&
                            d.status === "Available"
                    );


                return `
                    <tr>

                        <td>

                            <span class="priority-${
                                patient.priority.toLowerCase()
                            }">

                                ${
                                    index + 1
                                } -
                                ${
                                    patient.priority
                                }

                            </span>

                        </td>

                        <td>
                            ${patient.name}
                        </td>

                        <td>
                            ${patient.department}
                        </td>

                        <td>
                            ${10 + index * 7} mins
                        </td>

                        <td>

                            ${
                                doctor
                                    ? doctor.name
                                    : "No doctor available"
                            }

                        </td>

                        <td>

                            <button
                                class="action-btn"
                                onclick="handleEmergency('${patient.id}')">

                                Prioritize

                            </button>

                        </td>

                    </tr>
                `;

            })
            .join("");

}


/* =========================================================
   EMERGENCY PRIORITY
   ========================================================= */

function priorityValue(priority) {

    if (priority === "Critical") {
        return 3;
    }

    if (priority === "High") {
        return 2;
    }

    return 1;

}


/* =========================================================
   HANDLE EMERGENCY
   ========================================================= */

function handleEmergency(patientId) {

    const patient =
        patients.find(
            p => p.id === patientId
        );


    if (!patient) {
        return;
    }


    patient.status =
        "Emergency";


    /* Try to allocate emergency bed */

    if (!patient.bed) {

        const bed =
            allocateBed(patient);


        if (bed) {

            bed.status =
                "Occupied";

            bed.patient =
                patient.name;

            patient.bed =
                bed.id;

        }

    }


    saveData();

    updateDashboard();

    renderEmergency();

    renderPatients();

    renderBeds();


    showToast(
        `${patient.name} moved to emergency priority queue`
    );

}


/* =========================================================
   REPORTS
   ========================================================= */

function renderReports() {

    const reportPatients =
        document.getElementById(
            "reportPatients"
        );


    const reportBeds =
        document.getElementById(
            "reportBeds"
        );


    const reportEquipment =
        document.getElementById(
            "reportEquipment"
        );


    const reportEmergency =
        document.getElementById(
            "reportEmergency"
        );


    const occupied =
        beds.filter(
            b => b.status === "Occupied"
        ).length;


    const occupancy =
        beds.length === 0
            ? 0
            : Math.round(
                occupied /
                beds.length *
                100
            );


    const readyEquipment =
        equipment.filter(
            e => e.status === "Available"
        ).length;


    const equipmentPercentage =
        equipment.length === 0
            ? 0
            : Math.round(
                readyEquipment /
                equipment.length *
                100
            );


    const emergencies =
        patients.filter(
            p =>
                p.priority === "Critical" ||
                p.priority === "High"
        ).length;


    if (reportPatients) {

        reportPatients.innerText =
            patients.length;

    }


    if (reportBeds) {

        reportBeds.innerText =
            occupancy + "%";

    }


    if (reportEquipment) {

        reportEquipment.innerText =
            equipmentPercentage + "%";

    }


    if (reportEmergency) {

        reportEmergency.innerText =
            emergencies;

    }

}


/* =========================================================
   DOWNLOAD REPORT
   ========================================================= */

function downloadReport() {

    const occupied =
        beds.filter(
            b => b.status === "Occupied"
        ).length;


    const available =
        beds.filter(
            b => b.status === "Available"
        ).length;


    const maintenance =
        equipment.filter(
            e => e.status === "Maintenance"
        ).length;


    const emergency =
        patients.filter(
            p =>
                p.priority === "Critical" ||
                p.priority === "High"
        ).length;


    let report = "";


    report +=
        "SMART HOSPITAL MANAGEMENT SYSTEM\n";

    report +=
        "====================================\n\n";


    report +=
        "PATIENT SUMMARY\n";

    report +=
        "Total Patients: " +
        patients.length +
        "\n";

    report +=
        "Emergency Patients: " +
        emergency +
        "\n\n";


    report +=
        "BED SUMMARY\n";

    report +=
        "Total Beds: " +
        beds.length +
        "\n";

    report +=
        "Occupied Beds: " +
        occupied +
        "\n";

    report +=
        "Available Beds: " +
        available +
        "\n\n";


    report +=
        "EQUIPMENT SUMMARY\n";

    report +=
        "Total Equipment: " +
        equipment.length +
        "\n";

    report +=
        "Maintenance Equipment: " +
        maintenance +
        "\n\n";


    report +=
        "APPOINTMENT SUMMARY\n";

    report +=
        "Total Appointments: " +
        appointments.length +
        "\n";

    report +=
        "Completed: " +
        appointments.filter(
            a => a.status === "Completed"
        ).length +
        "\n";

    report +=
        "Upcoming: " +
        appointments.filter(
            a => a.status === "Upcoming"
        ).length +
        "\n";


    const blob =
        new Blob(
            [report],
            {
                type: "text/plain"
            }
        );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href = url;

    link.download =
        "Smart_Hospital_Report.txt";


    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);


    URL.revokeObjectURL(url);


    showToast(
        "Hospital report downloaded"
    );

}


/* =========================================================
   GLOBAL SEARCH
   ========================================================= */

function globalSearch() {

    const input =
        document.getElementById(
            "globalSearch"
        );


    if (!input) {
        return;
    }


    const query =
        input.value
            .trim()
            .toLowerCase();


    if (!query) {
        return;
    }


    const patient =
        patients.find(
            p =>
                p.name
                    .toLowerCase()
                    .includes(query) ||

                p.id
                    .toLowerCase()
                    .includes(query)
        );


    const doctor =
        doctors.find(
            d =>
                d.name
                    .toLowerCase()
                    .includes(query) ||

                d.department
                    .toLowerCase()
                    .includes(query)
        );


    const item =
        equipment.find(
            e =>
                e.name
                    .toLowerCase()
                    .includes(query) ||

                e.id
                    .toLowerCase()
                    .includes(query)
        );


    if (patient) {

        showPage("patients");

        setTimeout(() => {

            const search =
                document.getElementById(
                    "patientSearch"
                );

            if (search) {

                search.value =
                    query;

                searchPatients();

            }

        }, 50);


        showToast(
            "Patient found: " +
            patient.name
        );

        return;
    }


    if (doctor) {

        showPage("doctors");

        showToast(
            "Doctor found: " +
            doctor.name
        );

        return;
    }


    if (item) {

        showPage("equipment");

        showToast(
            "Equipment found: " +
            item.name
        );

        return;
    }


    showToast(
        "No matching record found"
    );

}


/* =========================================================
   MODAL CLOSE
   ========================================================= */

function closeModal(id) {

    const modal =
        document.getElementById(id);


    if (modal) {

        modal.classList.remove("show");

    }

}


/* =========================================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
   ========================================================= */

document.addEventListener(
    "click",
    function (event) {

        if (
            event.target.classList.contains(
                "modal"
            )
        ) {

            event.target.classList.remove(
                "show"
            );

        }

    }
);


/* =========================================================
   RESET SYSTEM
   ========================================================= */

function resetSystem() {

    const confirmReset =
        confirm(
            "Reset all hospital data to the original demo data?"
        );


    if (!confirmReset) {
        return;
    }


    localStorage.removeItem(
        "hospitalPatients"
    );

    localStorage.removeItem(
        "hospitalDoctors"
    );

    localStorage.removeItem(
        "hospitalBeds"
    );

    localStorage.removeItem(
        "hospitalEquipment"
    );

    localStorage.removeItem(
        "hospitalAppointments"
    );


    location.reload();

}


/* =========================================================
   GENERATE ID
   ========================================================= */

function generateId(prefix, array) {

    let number =
        array.length + 1;


    let id =
        prefix +
        String(number).padStart(3, "0");


    while (
        array.some(
            item => item.id === id
        )
    ) {

        number++;

        id =
            prefix +
            String(number).padStart(3, "0");

    }


    return id;

}


/* =========================================================
   GET INITIALS
   ========================================================= */

function getInitials(name) {

    return name
        .replace("Dr. ", "")
        .split(" ")
        .map(
            word => word.charAt(0)
        )
        .slice(0, 2)
        .join("")
        .toUpperCase();

}


/* =========================================================
   TOAST MESSAGE
   ========================================================= */

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    if (!toast) {
        return;
    }


    toast.innerText =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            function () {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* =========================================================
   INITIALIZE SYSTEM
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadData();

        updateDashboard();

        renderPatients();

        renderDoctors();

        renderBeds();

        renderEquipment();

        renderAppointments();

        renderEmergency();

        renderReports();

    }
);
