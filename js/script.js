const getSelectedColor = () => {
    const colorType = document.getElementById('colorType').value;

    if (colorType === 'solid') {
        getRandomColor();
        document.getElementById('color').style.display = 'block';
    } else if (colorType === 'gradient') {
        getGradientColor();
        document.getElementById('color').style.display = 'block';
    }
};

const getRandomColor = () => {
    let value1 = Math.ceil(0 + Math.random() * 255);
    let value2 = Math.ceil(0 + Math.random() * 255);
    let value3 = Math.ceil(0 + Math.random() * 255);

    document.body.style.backgroundColor = `rgb(${value1}, ${value2}, ${value3})`;
    document.getElementById('colorCode').innerHTML = `rgb(${value1}, ${value2}, ${value3})`;
    document.getElementById('colorCode').style.color = `rgb(${value1}, ${value2}, ${value3})`;
};

const getGradientColor = () => {
    let value1 = Math.ceil(0 + Math.random() * 255);
    let value2 = Math.ceil(0 + Math.random() * 255);
    let value3 = Math.ceil(0 + Math.random() * 255);
    let value4 = Math.ceil(0 + Math.random() * 255);
    let value5 = Math.ceil(0 + Math.random() * 255);
    let value6 = Math.ceil(0 + Math.random() * 255);

    document.body.style.background = `linear-gradient(to right, rgb(${value1}, ${value2}, ${value3}), rgb(${value4}, ${value5}, ${value6}))`;
    document.getElementById('colorCode').innerHTML = `linear-gradient(to right, rgb(${value1}, ${value2}, ${value3}), rgb(${value4}, ${value5}, ${value6}))`;
    document.getElementById('colorCode').style.color = `rgb(${value1}, ${value2}, ${value3})`;
};

const getCopyColor = () => {
    let colorCode = document.getElementById('colorCode').innerText;
    navigator.clipboard.writeText(colorCode);
};