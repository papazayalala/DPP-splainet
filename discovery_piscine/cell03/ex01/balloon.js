const balloon = document.getElementById('balloon');

const colors = ['red', 'green', 'blue'];

let current_size = 200;
let color_index = 0;

function update_balloon() {
    balloon.style.width = current_size + 'px';
    balloon.style.height = current_size + 'px';
    balloon.style.backgroundColor = colors[color_index];
}

balloon.addEventListener('click', function () {
    current_size += 10;

    if(current_size > 420) {
        current_size = 200;
        color_index = 0;
    } else {
        color_index = (color_index + 1) % colors.length;
    }

    update_balloon();
});

balloon.addEventListener('mouseleave', function () {
    if (current_size > 200) {
        current_size -= 5;

        if (current_size < 200) {
            current_size = 200;
        }

        color_index = (color_index - 1 + colors.length) % colors.length;
    }

    update_balloon();
});