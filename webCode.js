/*sign out*/
var signOut = document.querySelector('.signOut')
var navListItemSignOut = document.querySelector('.nav-list__item__signOut')
var signOutNo = document.querySelector('.signOut__No')
var coating = document.querySelector('.coating')
navListItemSignOut.onclick = () => {
    coating.style.display="block";
    signOut.style.display= 'block';

}
signOutNo.onclick = () => {
    coating.style.display="none";
    signOut.style.display= 'none';
}

/*music */
var relaxPlaylistAll = document.querySelectorAll('.relaxPlaylistAll')

var relaxPlaylist1 = document.querySelector('.relaxPlaylist1')

var relaxPlaylist2 = document.querySelector('.relaxPlaylist2')

var relaxPlaylist3 = document.querySelector('.relaxPlaylist3')

var relaxPlaylist4 = document.querySelector('.relaxPlaylist4')

var relaxPlaylist5 = document.querySelector('.relaxPlaylist5')

relaxPlaylistAll[0].onclick = () => {
    relaxPlaylist1.style.display = 'block';
    relaxPlaylist2.style.display = 'none';
    relaxPlaylist3.style.display = 'none';
    relaxPlaylist4.style.display = 'none';
    relaxPlaylist5.style.display = 'none';
}
relaxPlaylistAll[1].onclick = () => {
    relaxPlaylist1.style.display = 'none';
    relaxPlaylist2.style.display = 'block';
    relaxPlaylist3.style.display = 'none';
    relaxPlaylist4.style.display = 'none';
    relaxPlaylist5.style.display = 'none';
}
relaxPlaylistAll[2].onclick = () => {
    relaxPlaylist1.style.display = 'none';
    relaxPlaylist2.style.display = 'none';
    relaxPlaylist3.style.display = 'block';
    relaxPlaylist4.style.display = 'none';
    relaxPlaylist5.style.display = 'none';
}
relaxPlaylistAll[3].onclick = () => {
    relaxPlaylist1.style.display = 'none';
    relaxPlaylist2.style.display = 'none';
    relaxPlaylist3.style.display = 'none';
    relaxPlaylist4.style.display = 'block';
    relaxPlaylist5.style.display = 'none';
}
relaxPlaylistAll[4].onclick = () => {
    relaxPlaylist1.style.display = 'none';
    relaxPlaylist2.style.display = 'none';
    relaxPlaylist3.style.display = 'none';
    relaxPlaylist4.style.display = 'none';
    relaxPlaylist5.style.display = 'block';
}
