(function() {
  'use strict';

  angular
    .module('blog.controller', []).config(blogConfig)
    .controller('BlogCtrl', blogCtrl);

  ////////////////////////////////////////////////////////
  blogConfig.$inject = ['$stateProvider'];
  function blogConfig($stateProvider) {
    $stateProvider.state('app.blog', {
      url: '/blog',
      controller: 'BlogCtrl',
      templateUrl: 'components/blog/views/blog.tpl.html',
      resolve: {
          // Constant title
          $title: function () {
            return 'MENU_BLOGS';
          }
      }
    });
  }

  blogCtrl.$inject = ['$scope', '$state', '$stateParams', '$filter'];
  function blogCtrl($scope, $state, $stateParams, $filter) {

  }
  ////////////////////////////////////////////////////////

})();
