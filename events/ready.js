module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
 const activities = [
    { name: `#help`, type: 'WATCHING' }, 
    { name: `${client.guilds.cache.size} servers | ${client.users.cache.size} users `, type: 'WATCHING' }
  ];

  // Update presence
  client.user.setPresence({ status: 'dnd', activity: activities[0] });

  let activity = 1;

  // Update activity every 8 seconds
  setInterval(() => {
    activities[2] = { name: `${client.commands.size} commands`, type: 'PLAYING' }; // Update server count
    activities[3] = { name: `Super Singer | v1.1`, type: 'WATCHING' }; // Update user count
    if (activity > 3) activity = 0;
    client.user.setActivity(activities[activity]);
    activity++;
  }, 5000);



///// profile
setInterval(() => {
        const pfps = [
            "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWMlMjBsb2dvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80", 
            "https://images-platform.99static.com/FCY98Yn5UDRBmQcpm4Sve3b1EP8=/0x0:1875x1875/500x500/top/smart/99designs-contests-attachments/83/83315/attachment_83315236",
            "https://www.designyourway.net/blog/wp-content/uploads/2018/12/psychedelic-700x525.jpg",
            "https://cdn.dribbble.com/users/3547568/screenshots/14395014/media/0b94c75b97182946d495f34c16eab987.jpg?compress=1&resize=400x300",
            "https://c4.wallpaperflare.com/wallpaper/427/652/979/skull-music-wallpaper-preview.jpg",
            "https://cdn.dribbble.com/users/60166/screenshots/11313975/media/5f96fe67afaa4b9a24e5a2d5099e1d7f.jpg?compress=1&resize=400x300", 
        ]

        let final;
        final = pfps[Math.floor(Math.random() * pfps.length)] // randomizing pfps

        client.user.setAvatar(final) // setting randomized pfp
    }, 3600000);
 
};
