sampleSetup = {
  getProfilePictureCallback: function (userId) {
    return userId;
  },
  transformUserId: function (userId) {
    switch (userId) {
      case '2xy3pqG6nFR1gONt1':
        return 'Max Harris';
      case 'oZwps6BSs8tJtQRyz':
        return 'Chris Alexander';
      case 'rNq8ye2g8A8FSf3vW':
        return 'Jill White';
      case '7vz8mkA2pNm2sG3o9':
        return 'Matt Green';
      default:
        return 'unknown user';
    }
  },
  currentUserId: '2xy3pqG6nFR1gONt1'
};

sampleData = {
  editHistory: [
    [{
        "text": "Cras volutpat metus neque. Morbi ut fermentum dolor. Pellentesque fringilla ligula finibus, pharetra quam id, pretium dolor. Ut eu sapien eu felis rutrum pulvinar vel nec odio. Curabitur quis sem euismod massa suscipit congue elementum id lacus. Sed commodo tincidunt aliquam. Nullam ante tellus, scelerisque a id, rutrum eleifend nisi. Aliquam at mattis metus, quis pulvinar neque. Pellentesque condimentum feugiat neque, ut hendrerit magna lobortis ac. Pellentesque at nulla id ex lacinia efficitur. Sed tempus, purus at viverra placerat, augue odio scelerisque nisl, quis sollicitudin lorem nulla nec ex. Nullam rutrum leo a gravida hendrerit.",
        "lasteditindex": 1,
        "length": 646,
        "commentids": [0]
    }],
    [{
        "text": "Cras volutpat metus neque. Morbi ut fermentum dolor. Pellentesque fringilla ligula finibus, pharetra quam id, pretium dolor. Ut eu sapien eu felis rutrum pulvinar vel nec odio. ",
        "lasteditindex": 1,
        "length": 177
    }, {
        "text": "Curabitur",
        "lasteditindex": 2,
        "deleted": true,
        "length": 9
    }, {
        "text": " quis sem euismod massa suscipit congue elementum id lacus. Sed commodo tincidunt aliquam. Nullam ante tellus, scelerisque a id, rutrum eleifend nisi. Aliquam at mattis metus, quis pulvinar neque. Pellentesque condimentum feugiat neque, ut hendrerit magna lobortis ac. Pellentesque at nulla id ex lacinia efficitur. Sed tempus, purus at viverra placerat, augue odio scelerisque nisl, quis sollicitudin lorem nulla nec ex. Nullam rutrum leo a gravida hendrerit.",
        "lasteditindex": 1,
        "length": 460
    }],
    [{
        "text": "Cras volutpat metus neque. Morbi ut fermentum dolor. Pellentesque fringilla ligula finibus, pharetra quam id, pretium dolor. Ut eu sapien eu felis rutrum pulvinar vel nec odio. ",
        "lasteditindex": 1,
        "length": 177,
        "commentids": [0]
    }, {
        "text": " quis sem euismod massa suscipit congue elementum id lacus. Sed commodo tincidunt aliquam. Nullam ante tellus, scelerisque a id, rutrum eleifend nisi. Aliquam at mattis metus, quis pulvinar neque. Pellentesque condimentum feugiat neque, ut hendrerit magna lobortis ac. Pellentesque at nulla id ex lacinia efficitur. Sed tempus, purus at viverra placerat, augue odio scelerisque nisl, quis sollicitudin lorem nulla nec ex. Nullam rutrum leo a gravida hendrerit.",
        "lasteditindex": 1,
        "length": 460,
        "commentids": [0,1]
    }, {
        "text": "\n\nIn mollis augue nec erat pulvinar porta. Pellentesque vel congue odio. Pellentesque rutrum libero quis nunc sodales, tristique iaculis quam venenatis. Cras luctus nunc eget diam bibendum, non consequat purus tincidunt. Nam eleifend ante id pellentesque vestibulum. Sed pellentesque cursus pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus ultrices purus ac eros aliquam, vitae sagittis turpis faucibus. Quisque suscipit pellentesque pharetra. Mauris at hendrerit odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Ut condimentum, eros quis sollicitudin pharetra, sapien risus maximus nisi, vel ullamcorper justo augue eu nunc. Praesent ullamcorper nibh eget nunc ullamcorper venenatis eget in sapien. Aenean dapibus libero vitae turpis blandit ornare.",
        "lasteditindex": 3,
        "length": 873
    }]
  ],
  editHistoryUsers: [{
    userId: "oZwps6BSs8tJtQRyz",
    timestamp: 1419287734555
  }, {
    userId: "rNq8ye2g8A8FSf3vW",
    timestamp: 1421212363994
  }, {
    userId: "7vz8mkA2pNm2sG3o9",
    timestamp: 1421212363999
  }],
  commentRoot: [{
    commentId: 0,
    childCommentIds: [1, 2]
  },{
    textRunId: 0,
    commentId: 1,
    userId: '2xy3pqG6nFR1gONt1',
    commentText: "Haskell is an advanced purely-functional programming language.",
    childCommentIds: [],
    removable: false,
    replyable: true
  },{
    textRunId: 1,
    commentId: 2,
    userId: 'oZwps6BSs8tJtQRyz',
    commentText: "An open-source product of more than twenty years of cutting-edge research, it allows rapid development of robust, concise, correct software.",
    childCommentIds: [3],
    removable: false,
    replyable: true
  },{
    textRunId: 1,
    commentId: 3,
    userId: '7vz8mkA2pNm2sG3o9',
    commentText: "With strong support for integration with other languages, built-in concurrency and parallelism, debuggers, profilers, rich libraries and an active community, Haskell makes it easier to produce flexible, maintainable, high-quality software.",
    childCommentIds: [],
    removable: false,
    replyable: true
  }],
  latestCommentIndex: 1,
  lastSaveIndex: 2,
  latestWordCount: 343
};