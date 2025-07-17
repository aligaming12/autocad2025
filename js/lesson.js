document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const titleEl = document.getElementById('lesson-title');
    const descriptionEl = document.getElementById('lesson-description');
    const videoContainerEl = document.getElementById('video-player-container');
    const textContentEl = document.getElementById('text-content');
    const progressBarEl = document.getElementById('video-progress-bar');
    const progressContainerEl = document.querySelector('.video-progress-container');
    const lessonListEl = document.getElementById('lesson-list');

    // Get lesson ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const lessonId = urlParams.get('id');
    let lessonData;
    
    // Find lesson data
    if (lessonId && typeof tutorials !== 'undefined') {
        lessonData = tutorials.find(t => t.id === lessonId);
    }

    if (!lessonData) {
        handleError("Không tìm thấy bài học", "Có vẻ như bài học bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.");
        return;
    }

    // Populate initial content
    document.title = `${lessonData.title} - AutoCAD Learning`;
    titleEl.textContent = lessonData.title;
    descriptionEl.textContent = lessonData.description;
    if (lessonData.textContent && typeof marked === 'function') {
        textContentEl.innerHTML = marked.parse(lessonData.textContent);
    }
    
    // --- Populate Lesson List ---
    const populateLessonList = () => {
        if (!lessonListEl || typeof tutorials === 'undefined') return;

        tutorials.forEach(tutorial => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `lesson.html?id=${tutorial.id}`;
            a.textContent = tutorial.title;
            
            if(tutorial.id === lessonId) {
                a.classList.add('active');
            }

            li.appendChild(a);
            lessonListEl.appendChild(li);
        });
    };

    // --- YouTube IFrame API Integration ---
    let player;
    let progressInterval;

    // Load the IFrame Player API code asynchronously.
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // This function creates an <iframe> (and YouTube player) after the API code downloads.
    window.onYouTubeIframeAPIReady = function() {
        // We need a div with id='player' for the API to replace
        videoContainerEl.innerHTML = '<div id="player"></div>';
        player = new YT.Player('player', {
            height: '100%',
            width: '100%',
            videoId: lessonData.youtubeId,
            playerVars: {
                'playsinline': 1,
                'autoplay': 1,
                'controls': 1,
                'rel': 0
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }

    function onPlayerReady(event) {
        // Player is ready
    }

    function onPlayerStateChange(event) {
        // Clear previous interval
        clearInterval(progressInterval);

        // If video is playing, update progress bar every 100ms
        if (event.data == YT.PlayerState.PLAYING) {
            progressInterval = setInterval(() => {
                const currentTime = player.getCurrentTime();
                const duration = player.getDuration();
                const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
                progressBarEl.style.width = `${progress}%`;
            }, 100);
        }
    }
    
    // Allow seeking by clicking on the progress bar
    progressContainerEl.addEventListener('click', (e) => {
        if (player && player.getDuration) {
            const rect = progressContainerEl.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            const percentage = clickX / width;
            const newTime = player.getDuration() * percentage;
            player.seekTo(newTime, true);
        }
    });


    function handleError(title, description) {
        document.title = title;
        titleEl.textContent = title;
        descriptionEl.textContent = description;
    }

    // Initial call
    populateLessonList();
}); 