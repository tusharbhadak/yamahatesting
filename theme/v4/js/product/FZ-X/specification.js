// Product specifications for each product
const specifications = {
    "FZ-X": {
        "Engine": [
            { "title": "Engine Type", "value": "Air cooled, 4-stroke, SOHC, 2-valve" },
            { "title": "Displacement", "value": "149 cc" },
            { "title": "Bore & Stroke", "value": "57.3 mm x 57.9 mm" },
            { "title": "Compression Ratio", "value": "9.6 : 1" },
            { "title": "Maximum horse power", "value": "9.1 kW (12.4PS) / 7,250 r/min" },
            { "title": "E20 Compatible", "value": "Yes" },
            { "title": "Ignition", "value": "TCI (Transistor Controlled Ignition)" },
            { "title": "Starting system type", "value": "Electric starter" },
            { "title": "Maximum torque", "value": "13.3 N.m (1.4 kg f.m) / 5,500 r/min" },
        ],
        "Dimensions": [
            { "title": "Overall length", "value": "2,020 mm" },
            { "title": "Overall Width", "value": "785 mm" },
            { "title": "Overall Height", "value": "1,115 mm" },
            { "title": "Ground clearance", "value": "165 mm" },
            { "title": "Weight(with oil & a full fuel tank)", "value": "139 kg" },
            { "title": "Seat height", "value": "810 mm" },
            { "title": "Wheelbase", "value": "1,330 mm" },
        ],
        "Chassis": [
            { "title": "Tubeless tyre size (Front)", "value": "100/80-17M/C 52P Tubeless" },
            { "title": "Tubeless tyre size (Rear)", "value": "140/60R17M/C 63P Radial Tubeless" },
            { "title": "Brake type (Front)", "value": "Disc Brake 282mm with ABS" },
            { "title": "Brake type (Rear)", "value": "Disc Brake 220mm" },
        ],
        "Other Info": [
            { "title": "Fuel tank capacity", "value": "10 L" },
            { "title": "Fuel Supply System", "value": "Fuel injection" },
            { "title": "Clutch", "value": "Wet, Multiple-disc" },
            { "title": "Transmission type", "value": "Constant mesh, 5-speed" },
            { "title": "Front Suspension", "value": "Telescopic Fork, 41mm Inner Tube Diameter, with Fork Boot" },
            { "title": "Rear Suspension", "value": "7-Step Adjustable Monocross Suspension" },
            { "title": "Headlight", "value": "Bi-Functional LED" },
            { "title": "Brake/ Tail light", "value": "LED" },
            { "title": "Auxiliary Lights (DRL)", "value": "LED" },
            { "title": "Clock", "value": "Digital, Auto Adjust with Smart Phone Connectivity" },
            { "title": "Instrument Cluster", "value": "Negative LCD with Smart Phone Connectivity" },
            { "title": "Battery", "value": "12V" },
            { "title": "Traction Control System", "value": "Equipped" },
            { "title": "ECO indicator", "value": "Equipped" },
            { "title": "Power Socket", "value": "Equipped" },
            { "title": "Bluetooth (Yamaha Motorcycle Connect)*", "value": "Equipped" },
            { "title": "Side Stand Engine Cut-Off Switch", "value": "Equipped" },
        ]
    },
    // Add specifications for other products here
};

// Function to activate the tab and display corresponding details
function activateTab(tabIndex) {
    // Remove 'active' class from all buttons
    const buttons = document.querySelectorAll('.product_specification_button');
    buttons.forEach(button => button.classList.remove('active'));

    // Add 'active' class to the clicked button
    const button = document.querySelector(`.product_specification_button:nth-child(${tabIndex})`);
    button.classList.add('active');

    // Get the active product (in this case, R3)
    const activeProduct = "FZ-X"; // You can change this dynamically based on the product being displayed

    // Display corresponding details based on the active tab and product
    displayDetails(activeProduct, tabIndex);
}

// Function to display product details
function displayDetails(product, tabIndex) {
    const detailsContainer = document.querySelector('.product_specification_details');
    detailsContainer.innerHTML = ''; // Clear previous details

    // Get specifications for the active product and tab
    const activeSpecifications = specifications[product][getTabName(tabIndex)];

    // Create HTML elements for each specification
    activeSpecifications.forEach(spec => {
        const specItem = document.createElement('div');
        specItem.classList.add('product_specification_item');

        const title = document.createElement('div');
        title.classList.add('product_item_title');
        title.textContent = spec.title;

        const value = document.createElement('span');
        value.classList.add('product_item_value');
        value.textContent = spec.value;

        specItem.appendChild(title);
        specItem.appendChild(value);

        detailsContainer.appendChild(specItem);
    });
}

// Function to get the tab name based on its index
function getTabName(tabIndex) {
    const tabNames = ["Engine", "Dimensions", "Chassis", "Other Info"];
    return tabNames[tabIndex - 1];
}

// Initially activate the first tab
activateTab(1);
