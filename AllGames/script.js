document.querySelectorAll('.nav-link').forEach(link => {
	link.addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector('.nav-link.active').classList.remove('active');
		this.classList.add('active');
		switch (this.id) {
			case 'site1':
				document.getElementById('iframe').src = 'https://newjong.github.io/magicBalls/Laba7/index.html';
				break;
			case 'site2':
				document.getElementById('iframe').src = 'https://newjong.github.io/usercomp/Labka8/index.html';
				break;
			case 'site3':
				document.getElementById('iframe').src = 'https://newjong.github.io/durak/Laba9/index.html';
				break;
			case 'site4':
				document.getElementById('iframe').src = 'https://newjong.github.io/bandit1/index.html';
				break;
			case 'site5':
				document.getElementById('iframe').src = 'https://newjong.github.io/words1/Laba12/index.html';
				break;
		}
	});
});