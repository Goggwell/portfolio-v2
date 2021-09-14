export default function changeTab() {
    const tab0 = document.getElementById("tab-0");
    const tab1 = document.getElementById("tab-1");
    const tab2 = document.getElementById("tab-2");
    const panel0 = document.getElementById("panel-0");
    const panel1 = document.getElementById("panel-1");
    const panel2 = document.getElementById("panel-2");

    panel0.style.display = "none";
    panel1.style.display = "none";
    panel2.style.display = "none";

    tab0.className = tab0.className.replace(" activate", "");
    tab1.className = tab1.className.replace(" activate", "");
    tab2.className = tab2.className.replace(" activate", "");

    document.addEventListener("click", (e) => {
        const tab0Clicked = tab0.contains(e.target);
        const tab1Clicked = tab1.contains(e.target);
        const tab2Clicked = tab2.contains(e.target);

        if(tab0Clicked) {
            tab0.className += " activate";
            panel0.style.display = "block";

            panel1.style.display = "none";
            panel2.style.display = "none";

            tab1.className = tab1.className.replace(" activate", "");
            tab2.className = tab2.className.replace(" activate", "");
        }

        if(tab1Clicked) {
            tab1.className += " activate";
            panel1.style.display = "block";

            panel0.style.display = "none";
            panel2.style.display = "none";

            tab0.className = tab0.className.replace(" activate", "");
            tab2.className = tab2.className.replace(" activate", "");
        }

        if(tab2Clicked) {
            tab2.className += " activate";
            panel2.style.display = "block";

            panel1.style.display = "none";
            panel0.style.display = "none";

            tab1.className = tab1.className.replace(" activate", "");
            tab0.className = tab0.className.replace(" activate", "");
        }
    });

    tab0.click();
}