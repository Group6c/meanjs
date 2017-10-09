(function () {
  'use strict';

  angular
    .module('sponsors')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Sponsors',
      state: 'sponsors',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'sponsors', {
      title: 'Our Sponsors',
      state: 'sponsors.list'
    });

    menuService.addSubMenuItem('topbar', 'sponsors', {
      title: 'Become a Sponsor',
      state: 'sponsors.create',
      roles: ['user']
    });

    menuService.addSubMenuItem('topbar', 'sponsors', {
      title: 'Manage Site Advertisements',
      state: 'sponsors.manage',
      roles: ['admin']
    });
  }
}());
