// Product specifications for each product
const specifications = {
    "R15S": {
        "Engine": [
            { "title": "Engine Type", "value": "Liquid-cooled, 4-stroke, SOHC, 4-valve" },
            { "title": "Displacement", "value": "155 CC" },
            { "title": "Bore & Stroke", "value": "58.0 mm × 58.7 mm" },
            { "title": "Compression Ratio", "value": "11.6 : 1" },
            { "title": "Maximum horse power", "value": "13.5kW(18.4PS)/10000 RPM" },
            { "title": "E20 Compatible", "value": "Yes" },
            { "title": "Clutch Type", "value": "Wet, Multiple Disc" },
            { "title": "Transmission type", "value": "Constant mesh, 6-speed" },
            { "title": "Starting system type", "value": "Electric starter" },
            { "title": "Maximum torque", "value": "14.2 Nm (1.4 kgfm) @7,500 RPM" },
            { "title": "Fuel System", "value": "Fuel injection" }
        ],
        "Dimensions": [
            { "title": "Overall length", "value": "1,990 mm" },
            { "title": "Overall Width", "value": "725 mm" },
            { "title": "Overall Height", "value": "1,135 mm" },
            { "title": "Minimum ground clearance", "value": "170 mm" },
            { "title": "Weight(with oil & a full fuel tank)", "value": "142 kg" },
            { "title": "Seat height", "value": "815 mm" },
            { "title": "Wheelbase", "value": "1,325 mm" },
            { "title": "Fuel tank capacity", "value": "11 L" },
        ],
        "Chassis": [
            { "title": "Frame type", "value": "Deltabox" },
            { "title": "Front suspension system", "value": "Telescopic Fork" },
            { "title": "Rear suspension system", "value": "Monocross (link suspension)" },
            { "title": "Brake type (Front)", "value": "Disc brake (282 mm)" },
            { "title": "Brake type (Rear)", "value": "Disc brake (220 mm)" },
            { "title": "Tyre size (front)", "value": "100/80-17M/C 52P - Tubeless" },
            { "title": "Tyre size (rear)", "value": "140/70R17M/C 66H - Radial Tubeless" },
            { "title": "Inner tube (diameter of front fork)", "value": "41.0 mm" },
        ],
        "Other Info": [
            { "title": "Battery", "value": "12 V, 4.0 Ah" },
            { "title": "Headlight", "value": "LED" },
            { "title": "Auxiliary light", "value": "LED" },
            { "title": "Brake/tail light", "value": "LED" },
            { "title": "Speedometer", "value": "Digital" },
            { "title": "Tachometer", "value": "Digital" },
            { "title": "Fuel meter", "value": "Digital" },
            { "title": "ABS", "value": "Dual channel ABS" },
            { "title": "Dual horn", "value": "Equipped" },
            { "title": "Fuel consumption indicator", "value": "Equipped" },
            { "title": "Gear position indicator", "value": "Equipped" },
            { "title": "Shift timing light", "value": "Equipped" },
            { "title": "VVA indicator", "value": "Equipped" },
            { "title": "Clock", "value": "Digital" },
            { "title": "VVA", "value": "Equipped" },
            { "title": "Side stand engine cut-off switch", "value": "Equipped" },
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
    const activeProduct = "R15S"; // You can change this dynamically based on the product being displayed

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
