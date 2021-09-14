export default function colorHover() {
    // document.getElementsByClassName('colorHoverIcon').addEventListener('mouseover', () => {
    //     document.getElementsByClassName('colorHoverIcon').classList.add("colored");
    // });

    // document.getElementsByClassName('colorHoverIcon').addEventListener('mouseout', () => {
    //     document.getElementsByClassName('colorHoverIcon').classList.remove("colored");
    // });

    const colorHoverList = document.getElementsByClassName('colorHoverIcon');

    for(let i = 0; i < colorHoverList.length; i++) {
        colorHoverList[i].addEventListener("mouseover", () => {
            colorHoverList[i].classList.add("colored");
        })

        colorHoverList[i].addEventListener("mouseout", () => {
            colorHoverList[i].classList.remove("colored");
        })
    }
};