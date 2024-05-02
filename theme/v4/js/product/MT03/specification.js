// Product specifications for each product
const specifications = {
    "MT03": {
        "Engine": [
            { "title": "Engine Type", "value": "4-stroke, Liquid-cooled, DOHC, 4-valves" },
            { "title": "Displacement", "value": "321cc" },
            { "title": "Bore & Stroke", "value": "68.0 mm x 44.1 mm" },
            { "title": "Compression Ratio", "value": "11.2 : 1" },
            { "title": "Maximum Power", "value": "30.9 kW (42.0 PS) @ 10,750 rpm" },
            { "title": "Maximum Torque", "value": "29.5 Nm (3.0 kgfm) @ 9,000 rpm" },
            { "title": "Clutch Type", "value": "Wet, Multiple Disc" },
            { "title": "Ignition System", "value": "TCI" },
            { "title": "Starter System", "value": "Electric" },
            { "title": "Transmission system", "value": "Constant Mesh, 6-speed" },
            { "title": "Fuel System", "value": "Electronic Fuel Injection" }
        ],
        "Dimensions": [
            { "title": "Overall length", "value": "2,090 mm" },
            { "title": "Overall Width", "value": "755 mm" },
            { "title": "Overall Height", "value": "1,070 mm" },
            { "title": "Minimum ground clearance", "value": "160 mm" },
            { "title": "Wet weight (including full oil and fuel tank)", "value": "167 kg" },
            { "title": "Seat height", "value": "780 mm" },
            { "title": "Wheelbase", "value": "1,380 mm" },
            { "title": "Fuel tank capacity", "value": "14 L" },
        ],
        "Chassis": [
            { "title": "Frame type", "value": "Diamond" },
            { "title": "Caster angle", "value": "25°" },
            { "title": "Trail", "value": "95mm" },
            { "title": "Front suspension system", "value": "Telescopic Upside Down Fork (USD Fork)" },
            { "title": "Rear suspension system", "value": "Swingarm" },
            { "title": "Front brake", "value": "Hydraulic single disc, 298 mm" },
            { "title": "Rear brake", "value": "Hydraulic single disc, 220 mm" },
            { "title": "Front tyre", "value": "110/70R17M/C (54H) Tubeless" },
            { "title": "Rear tyre", "value": "140/70R17M/C (66H) Tubeless" },
            { "title": "ABS", "value": "Dual Channel" },
        ],
        "Other Info": [
            { "title": "Battery", "value": "12 V, 7.0 Ah" },
            { "title": "Headlight", "value": "Projector type Bi-functional LED Headlight" },
            { "title": "Position light", "value": "LED" },
            { "title": "Brake/tail light", "value": "LED" },
            { "title": "Speedometer", "value": "Digital" },
            { "title": "Tachometer", "value": "Digital" },
            { "title": "Fuel meter", "value": "Digital" },
            { "title": "Fuel consumption indicator", "value": "Equipped" },
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
    const activeProduct = "MT03"; // You can change this dynamically based on the product being displayed

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
