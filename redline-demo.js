if (Meteor.isClient) {
  Template.body.rendered = function () {
    fullscreenEditorSetup(sampleSetup, 'fullscreenEditorStub', sampleData);
  };
}