let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function selectPlanet(planet) {
    document.getElementById("selectedPlanet").innerText = planet;
    switch (planet) {
        case "Mercury":
            document.getElementById("planetInfo1").innerText = "Mercury is the smallest planet in the Solar System and the closest to the Sun. It is named after the Roman deity Mercury, the messenger of the gods. Mercury's surface appears heavily cratered and is similar in appearance to Earth's Moon, indicating that it has been geologically inactive for billions of years.";
            document.getElementById("planetInfo2").innerText = "Mercury is one of the four terrestrial planets in the Solar System, and it has a rocky body like the Earth. Its orbit around the Sun takes 88 Earth days, which is shorter than any other planet in the Solar System.";
            break;
        case "Venus":
            document.getElementById("planetInfo1").innerText = "Venus is the second planet from the Sun and is named after the Roman goddess of love and beauty. It is often called the 'morning star' or the 'evening star' because it is visible at dawn and dusk. Venus is sometimes referred to as Earth's 'sister planet' due to their similar size and composition.";
            document.getElementById("planetInfo2").innerText = "Venus has a thick atmosphere composed mainly of carbon dioxide, with clouds of sulfuric acid. Its surface is extremely hot, with temperatures reaching up to 471 °C (880 °F), making it the hottest planet in the Solar System.";
            break;
        case "Earth":
            document.getElementById("planetInfo1").innerText = "Earth is the third planet from the Sun and the only astronomical object known to harbor life. It is the densest planet in the Solar System and the largest of the four terrestrial planets. Earth's atmosphere protects life by absorbing ultraviolet solar radiation, warming the surface through heat retention (greenhouse effect), and reducing temperature extremes between day and night.";
            document.getElementById("planetInfo2").innerText = "The Earth's rotational axis is tilted relative to its orbital plane, producing seasons on Earth. The planet is divided into several layers, including the solid inner core, the liquid outer core, the mantle, and the crust. Earth is home to millions of species, including humans, and is the only place in the universe known to support life.";
            break;
        case "Mars":
            document.getElementById("planetInfo1").innerText = "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, after Mercury. It is named after the Roman god of war and is often referred to as the 'Red Planet' because of its reddish appearance. Mars has intrigued humans for centuries as a possible site for extraterrestrial life.";
            document.getElementById("planetInfo2").innerText = "Mars has a thin atmosphere composed mainly of carbon dioxide, with surface features reminiscent of both the impact craters of the Moon and the volcanoes, valleys, deserts, and polar ice caps of Earth. The planet has two small moons, Phobos and Deimos, which are thought to be captured asteroids.";
            break;
        case "Jupiter":
            document.getElementById("planetInfo1").innerText = "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun but two and a half times that of all the other planets in the Solar System combined. Jupiter is primarily composed of hydrogen and helium.";
            document.getElementById("planetInfo2").innerText = "Jupiter's iconic Great Red Spot is a giant storm larger than Earth that has been raging for at least 400 years. The planet has a strong magnetic field and is known for its extensive system of moons, including the four large Galilean moons: Io, Europa, Ganymede, and Callisto.";
            break;
        case "Saturn":
            document.getElementById("planetInfo1").innerText = "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is named after the Roman god of agriculture and wealth and is known for its distinctive ring system, which is made up of ice particles, rock debris, and dust.";
            document.getElementById("planetInfo2").innerText = "Saturn is a gas giant composed mostly of hydrogen and helium, with an average radius about nine times that of Earth. It has a low density, making it the least dense planet in the Solar System. Saturn has numerous moons, with its largest moon, Titan, being larger than the planet Mercury.";
            break;
        case "Uranus":
            document.getElementById("planetInfo1").innerText = "Uranus is the seventh planet from the Sun and the third-largest in the Solar System. It is named after the ancient Greek deity of the sky Uranus, the father of Cronus (Saturn) and grandfather of Zeus (Jupiter). Uranus is similar in composition to Neptune, and both have bulk chemical compositions different from those of the larger gas giants Jupiter and Saturn.";
            document.getElementById("planetInfo2").innerText = "Uranus's atmosphere is composed primarily of hydrogen and helium, with trace amounts of methane and other hydrocarbons. It has a unique feature among the planets in the Solar System: its axis of rotation is tilted sideways, almost parallel to its orbit around the Sun, leading to extreme seasonal variations.";
            break;
        case "Neptune":
            document.getElementById("planetInfo1").innerText = "Neptune is the eighth and farthest-known Solar System planet from the Sun. It is named after the Roman god of the sea and has the astronomical symbol ♆, a stylised version of the god Neptune's trident or the Greek letter psi (ψ) in a circle.";
            document.getElementById("planetInfo2").innerText = "Neptune is a gas giant, similar in composition to Uranus, and has a blue color due to the presence of methane in its atmosphere. It has the strongest winds of any planet in the Solar System, with speeds reaching up to 2,100 kilometers per hour (1,300 miles per hour). Neptune has a faint ring system and 14 known moons.";
            break;
    }
}
