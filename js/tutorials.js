document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const searchInput = document.getElementById('search-input');
    const categoryFiltersContainer = document.getElementById('category-filters');
    const tutorialGrid = document.getElementById('tutorial-grid');

    // State
    let activeCategory = 'all';

    // --- Data Persistence for Completion & Favorites ---
    const getCompletionData = () => JSON.parse(localStorage.getItem('tutorialCompletion')) || {};
    const getFavoriteData = () => JSON.parse(localStorage.getItem('tutorialFavorites')) || {};
    const isCompleted = (tutorialId) => getCompletionData()[tutorialId] === true;
    const isFavorited = (tutorialId) => getFavoriteData()[tutorialId] === true;
    
    const setFavoriteData = (data) => localStorage.setItem('tutorialFavorites', JSON.stringify(data));
    const toggleFavorite = (tutorialId) => {
        const favoriteData = getFavoriteData();
        favoriteData[tutorialId] = !isFavorited(tutorialId);
        setFavoriteData(favoriteData);
    };

    // --- Rendering Logic ---

    const renderTutorialGrid = (filteredTutorials) => {
        tutorialGrid.innerHTML = '';
        if (filteredTutorials.length === 0) {
            tutorialGrid.innerHTML = '<p>Không tìm thấy bài học phù hợp.</p>';
            return;
        }

        filteredTutorials.forEach(tutorial => {
            const card = document.createElement('a'); // Change to an anchor tag
            card.className = 'tutorial-card';
            card.href = `lesson.html?id=${tutorial.id}`;
            card.target = '_blank'; // Open in new tab
            card.dataset.id = tutorial.id;

            const isFavoritedStatus = isFavorited(tutorial.id);

            card.innerHTML = `
                <img src="${tutorial.thumbnail}" alt="${tutorial.title}">
                <div class="tutorial-card-content">
                    <h3>${tutorial.title}</h3>
                    <p>${tutorial.description}</p>
                </div>
                <button class="favorite-btn ${isFavoritedStatus ? 'favorited' : ''}" data-id="${tutorial.id}">⭐</button>
            `;
            
            if (isCompleted(tutorial.id)) {
                card.classList.add('completed');
            }

            const cardFavoriteBtn = card.querySelector('.favorite-btn');
            cardFavoriteBtn.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent link navigation
                e.stopPropagation(); 
                toggleFavorite(tutorial.id);
                renderFilteredContent();
            });

            tutorialGrid.appendChild(card);
        });
    };

    const renderFilteredContent = () => {
        const searchTerm = searchInput.value.toLowerCase();
        let filteredTutorials = tutorials;

        if (activeCategory === 'favorites') {
             filteredTutorials = tutorials.filter(tutorial => isFavorited(tutorial.id));
        } else {
            filteredTutorials = tutorials.filter(tutorial => 
                activeCategory === 'all' || tutorial.category === activeCategory
            );
        }
        
        filteredTutorials = filteredTutorials.filter(tutorial => {
            const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm) || 
                                  tutorial.description.toLowerCase().includes(searchTerm);
            return matchesSearch;
        });

        renderTutorialGrid(filteredTutorials);
    };

    const populateCategoryFilters = () => {
        const categories = ['all', ...new Set(tutorials.map(t => t.category)), 'favorites'];
        categoryFiltersContainer.innerHTML = '';
        categories.forEach(category => {
            const btn = document.createElement('button');
            btn.className = 'filter-btn';
            if (category === 'all') {
                btn.textContent = 'Tất cả';
            } else if (category === 'favorites') {
                btn.textContent = '⭐ Yêu thích';
            } else {
                btn.textContent = category;
            }
            btn.dataset.category = category;
            if (category === activeCategory) btn.classList.add('active');
            
            btn.addEventListener('click', () => {
                activeCategory = category;
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderFilteredContent();
            });
            categoryFiltersContainer.appendChild(btn);
        });
    };
    
    // --- Event Listeners ---
    searchInput.addEventListener('input', renderFilteredContent);

    // --- Initial Load ---
    populateCategoryFilters();
    renderFilteredContent();
});
