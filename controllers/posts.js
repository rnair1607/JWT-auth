const getPosts = (req, res) => {
  res.json({
    posts: { title: "My first post", description: "Protected data" },
  });
};

module.exports = { getPosts: getPosts };
