    async function SearchBTN() {
     

            const query = document.getElementById("querys").value
            const resultsDiv = document.getElementById('result');
            const Results = document.querySelector(".G_result")
            const loading = document.getElementById('loading');
      

            if (!query) return;

            // Setup
            resultsDiv.innerHTML = '';
            loading.style.display = 'block';

            try {
                const response = await fetch("https://google.serper.dev/search", {
                    method: 'POST',
                    headers: {
                        'X-API-KEY': 'd32e7442a85a07205e089f17093cf2f785149944', // <--- PASTE KEY HERE
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ q: query})
                });

                const data = await response.json();
                loading.style.display = 'none';


                // Render Results
                data.organic.forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'result';
                    div.innerHTML = `
                        <cite>${item.link}</cite>
                        <a href="${item.link}" target="_blank">${item.title}</a>
                        <p>${item.snippet}</p>
                    `;
                    resultsDiv.appendChild(div);
                });

            } catch (error) {
             location.href ="err.html"
            }



//  THE LOGIC FOR THE GEMINI AI
  console.log(query)

  if (!query) return;

//   Results.innerHTML += `<p><strong>You:</strong> ${query}</p>`;

  const response = await fetch("http://localhost:3000/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  });

  const data = await response.json();
//   data = data.replace(/\*/g, "")
  Results.innerHTML += `<p><h4>Gemini:</h4> ${data.reply}</p>`;
  query.value = "";
  console.log(typeof data)

        }

        // Allow "Enter" key to trigger search
        document.getElementById('querys').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') SearchBTN();
        });




        const sidebar = document.getElementById('sidebars');
        const rightPanel = document.getElementById('rightPanel');
        const toggleSidebar = document.querySelector('.Open');

        const screen = document.querySelector(".screen")
        const overlay = document.getElementById('overlay');
        const closeSidebar = document.querySelector('.Close');
        const closeRightPanel = document.getElementById('closeRightPanel');
        const searchFrame = document.getElementById("searchFrame");


        // Toggle sidebar
        toggleSidebar.addEventListener('click', () => {
            MenuBtnON()

            toggleSidebar.classList.add("active")
            closeSidebar.classList.add("active")
        });


        // Close sidebar
        closeSidebar.addEventListener('click', () => {
            MenuBtnOFF()
            toggleSidebar.classList.remove("active")
            closeSidebar.classList.remove("active")
        });



        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024) {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
            }
            if (window.innerWidth >= 1280) {
                rightPanel.classList.remove('active');
                overlay.classList.remove('active');
            }
        });

        // Toggle switches functionality
        const toggleSwitches = document.querySelectorAll('.toggle-switch');
        toggleSwitches.forEach(toggle => {

            toggle.addEventListener('click', () => {
                toggle.classList.toggle('off');
            });
        });


        // Tab navigation
        const tabItems = document.querySelectorAll('.tab-nav-item');
        tabItems.forEach(tab => {
            tab.addEventListener('click', () => {
                tabItems.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            });
        });

        // Category buttons
        const categoryBtns = document.querySelectorAll('.category-btn');
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                categoryBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // Carousel dots
        const carouselDots = document.querySelectorAll('.carousel-dot');
        carouselDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                carouselDots.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
            });
        });







        // Toggle sidebar
        function MenuBtnON() {
         sidebar.classList.add('active');
         overlay.classList.add("active")
        }


        // Close sidebar
        function MenuBtnOFF() {
            sidebar.classList.remove('active');
            overlay.classList.remove("active")

        }


    