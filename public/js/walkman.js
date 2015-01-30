/**
 * Created by Peter Chapman on 1/14/2015.
 */

//Implementing the Module Pattern
//REQUIRES stratus.js and SOUNDCLOUD SDK WRAPPER

walkman = (function () {
    var userid = 99944868,
        missing = 72178656,
        love = 72150312,
        wanting = 72179080;

    function reloadPlayer(playlist) {
        $.stratusChangeSongs({
            links: playlist,
            theme: 'http://atdimusic.com/wp-content/themes/atdi/style.css',
            auto_play: true,
            stats: false,
            volume: 70
        });
    }

    var generatePlaylistString = function(playlist){
        var tracks = playlist["tracks"],
            playlist = "";

        for(var i = 0; i < tracks.length; i++){
            playlist += (playlist == "") ? tracks[i]["permalink_url"] : ", " + tracks[i]["permalink_url"];
        }

        reloadPlayer(playlist);
    };

    function getPlaylist(playid) {
        SC.get("/playlists/" + playid, generatePlaylistString);
    }

    function getUserID(url) {
        SC.get('/resolve', {url: url}, function (user) {
            userid = user.id;
        });
    }

    return {
        loadPlaylist: function(name) {
            switch(name){
                case "love":
                    var playid = love;
                    break;
                case "missing":
                    var playid = missing;
                    break;
                case "wanting":
                    var playid = wanting;
                    break;
                default:
                    var playid = null;
                    break;
            }
            getPlaylist(playid);
        },

        loadUser: function(url){
            getUserID(url);
        },

        loadPlayer: function(){
            jQuery.stratus({
                color: '000000',
                theme: 'http://atdimusic.com/wp-content/themes/atdi/style.css',
                auto_play: true,
                download: false,
                stats: false,
                volume: 70
            });
        }
    };
})();
