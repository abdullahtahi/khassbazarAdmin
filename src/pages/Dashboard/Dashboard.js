import React from 'react'

export default function Dashboard() {
  return (
    <div>
<div>
        {/* Page Loader */}
        <div className="page-loader-wrapper">
          <span className="loader"><span className="loader-inner" /></span>
        </div>
        <div id="app">
          <div className="main-wrapper main-wrapper-1">
            <div className="navbar-bg" />
            {/* Start app top navbar */}
            <nav className="navbar navbar-expand-lg main-navbar">
              <form className="form-inline mr-auto">
                <ul className="navbar-nav mr-3">
                  <li><a href="#" data-toggle="sidebar" className="nav-link nav-link-lg"><i className="fas fa-bars" /></a></li>
                  <li><a href="#" data-toggle="search" className="nav-link nav-link-lg d-sm-none"><i className="fas fa-search" /></a></li>
                </ul>
                <div className="search-element">
                  <input className="form-control" type="search" placeholder="Search" aria-label="Search" data-width={250} />
                  <button className="btn" type="submit"><i className="fas fa-search" /></button>
                  <div className="search-backdrop" />
                  <div className="search-result">
                    <div className="search-header">Histories</div>
                    <div className="search-item">
                      <a href="#">How to Used HTML in Laravel</a>
                      <a href="#" className="search-close"><i className="fas fa-times" /></a>
                    </div>
                    <div className="search-item">
                      <a href="https://themeforest.net/user/admincraft/portfolio" target="_black">Admincraft Portfolio</a>
                      <a href="#" className="search-close"><i className="fas fa-times" /></a>
                    </div>
                    <div className="search-item">
                      <a href="#">#CodiePie</a>
                      <a href="#" className="search-close"><i className="fas fa-times" /></a>
                    </div>
                    <div className="search-header">Result</div>
                    <div className="search-item">
                      <a href="#">
                        <img className="mr-3 rounded" width={30} src="assets/img/products/product-3-50.png" alt="product" />
                        oPhone 11 Pro
                      </a>
                    </div>
                    <div className="search-item">
                      <a href="#">
                        <img className="mr-3 rounded" width={30} src="assets/img/products/product-2-50.png" alt="product" />
                        Drone Zx New Gen-3
                      </a>
                    </div>
                    <div className="search-item">
                      <a href="#">
                        <img className="mr-3 rounded" width={30} src="assets/img/products/product-1-50.png" alt="product" />
                        Headphone JBL
                      </a>
                    </div>
                    <div className="search-header">Projects</div>
                    <div className="search-item">
                      <a href="https://themeforest.net/item/epice-laravel-admin-template-for-hr-project-management/24466729" target="_black">
                        <div className="search-icon bg-danger text-white mr-3"><i className="fas fa-code" /></div>
                        Epice Laravel - Admin Template
                      </a>
                    </div>
                    <div className="search-item">
                      <a href="https://themeforest.net/item/soccer-project-management-admin-template-ui-kit/24646866" target="_black">
                        <div className="search-icon bg-primary text-white mr-3"><i className="fas fa-laptop" /></div>
                        Soccer - Admin Template
                      </a>
                    </div>
                  </div>
                </div>
              </form>
              <ul className="navbar-nav navbar-right">
                <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown" className="nav-link nav-link-lg message-toggle beep"><i className="far fa-envelope" /></a>
                  <div className="dropdown-menu dropdown-list dropdown-menu-right">
                    <div className="dropdown-header">Messages
                      <div className="float-right">
                        <a href="#">Mark All As Read</a>
                      </div>
                    </div>
                    <div className="dropdown-list-content dropdown-list-message">
                      <a href="#" className="dropdown-item dropdown-item-unread">
                        <div className="dropdown-item-avatar">
                          <img alt="image" src="assets/img/avatar/avatar-1.png" className="rounded-circle" />
                          <div className="is-online" />
                        </div>
                        <div className="dropdown-item-desc">
                          <b>Kusnaedi</b>
                          <p>Hello, Bro!</p>
                          <div className="time">10 Hours Ago</div>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item dropdown-item-unread">
                        <div className="dropdown-item-avatar">
                          <img alt="image" src="assets/img/avatar/avatar-2.png" className="rounded-circle" />
                        </div>
                        <div className="dropdown-item-desc">
                          <b>Dedik Sugiharto</b>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                          <div className="time">12 Hours Ago</div>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item dropdown-item-unread">
                        <div className="dropdown-item-avatar">
                          <img alt="image" src="assets/img/avatar/avatar-3.png" className="rounded-circle" />
                          <div className="is-online" />
                        </div>
                        <div className="dropdown-item-desc">
                          <b>Agung Ardiansyah</b>
                          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                          <div className="time">12 Hours Ago</div>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item">
                        <div className="dropdown-item-avatar">
                          <img alt="image" src="assets/img/avatar/avatar-4.png" className="rounded-circle" />
                        </div>
                        <div className="dropdown-item-desc">
                          <b>Ardian Rahardiansyah</b>
                          <p>Duis aute irure dolor in reprehenderit in voluptate velit ess</p>
                          <div className="time">16 Hours Ago</div>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item">
                        <div className="dropdown-item-avatar">
                          <img alt="image" src="assets/img/avatar/avatar-5.png" className="rounded-circle" />
                        </div>
                        <div className="dropdown-item-desc">
                          <b>Alfa Zulkarnain</b>
                          <p>Exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                          <div className="time">Yesterday</div>
                        </div>
                      </a>
                    </div>
                    <div className="dropdown-footer text-center">
                      <a href="#">View All <i className="fas fa-chevron-right" /></a>
                    </div>
                  </div>
                </li>
                <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown" className="nav-link notification-toggle nav-link-lg beep"><i className="far fa-bell" /></a>
                  <div className="dropdown-menu dropdown-list dropdown-menu-right">
                    <div className="dropdown-header">Notifications
                      <div className="float-right">
                        <a href="#">Mark All As Read</a>
                      </div>
                    </div>
                    <div className="dropdown-list-content dropdown-list-icons">
                      <a href="#" className="dropdown-item dropdown-item-unread">
                        <div className="dropdown-item-icon bg-primary text-white">
                          <i className="fas fa-code" />
                        </div>
                        <div className="dropdown-item-desc"> Template update is available now!
                          <div className="time text-primary">2 Min Ago</div>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item">
                        <div className="dropdown-item-icon bg-info text-white">
                          <i className="far fa-user" />
                        </div>
                        <div className="dropdown-item-desc">
                          <b>You</b> and <b>Dedik Sugiharto</b> are now friends
                          <div className="time">10 Hours Ago</div>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item">
                        <div className="dropdown-item-icon bg-success text-white">
                          <i className="fas fa-check" />
                        </div>
                        <div className="dropdown-item-desc">
                          <b>Kusnaedi</b> has moved task <b>Fix bug header</b> to <b>Done</b>
                          <div className="time">12 Hours Ago</div>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item">
                        <div className="dropdown-item-icon bg-danger text-white">
                          <i className="fas fa-exclamation-triangle" />
                        </div>
                        <div className="dropdown-item-desc">
                          Low disk space. Let's clean it!
                          <div className="time">17 Hours Ago</div>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item">
                        <div className="dropdown-item-icon bg-info text-white">
                          <i className="fas fa-bell" />
                        </div>
                        <div className="dropdown-item-desc">
                          Welcome to CodiePie template!
                          <div className="time">Yesterday</div>
                        </div>
                      </a>
                    </div>
                    <div className="dropdown-footer text-center">
                      <a href="#">View All <i className="fas fa-chevron-right" /></a>
                    </div>
                  </div>
                </li>
                <li className="dropdown">
                  <a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
                    <img alt="image" src="assets/img/avatar/avatar-1.png" className="rounded-circle mr-1" />
                    <div className="d-sm-none d-lg-inline-block">Hi, Michelle Green</div></a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <div className="dropdown-title">Logged in 5 min ago</div>
                    <a href="features-profile.html" className="dropdown-item has-icon"><i className="far fa-user" /> Profile</a>
                    <a href="features-activities.html" className="dropdown-item has-icon"><i className="fas fa-bolt" /> Activities</a>
                    <a href="features-settings.html" className="dropdown-item has-icon"><i className="fas fa-cog" /> Settings</a>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item has-icon text-danger"><i className="fas fa-sign-out-alt" /> Logout</a>
                  </div>
                </li>
              </ul>
            </nav>
            {/* Start main left sidebar menu */}
            <div className="main-sidebar sidebar-style-3">
              <aside id="sidebar-wrapper">
                <div className="sidebar-brand">
                  <a href="index-2.html">CodiePie</a>
                </div>
                <div className="sidebar-brand sidebar-brand-sm">
                  <a href="index-2.html">CP</a>
                </div>
                <ul className="sidebar-menu">
                  <li className="menu-header">Dashboard</li>
                  <li className="dropdown active">
                    <a href="#" className="nav-link has-dropdown"><i className="fas fa-fire" /><span>Dashboard</span></a>
                    <ul className="dropdown-menu">
                      <li><a className="nav-link" href="index-0.html">Analytics</a></li>
                      <li className="active"><a className="nav-link" href="index-2.html">Ecommerce</a></li>
                    </ul>
                  </li>
                  <li className="menu-header">Starter</li>
                  <li className="dropdown">
                    <a href="#" className="nav-link has-dropdown" data-toggle="dropdown"><i className="fas fa-columns" /> <span>Layout</span></a>
                    <ul className="dropdown-menu">
                      <li><a className="nav-link" href="layout-default.html">Default Layout</a></li>
                      <li><a className="nav-link" href="layout-top-navigation.html">Top Navigation</a></li>
                    </ul>
                  </li>
                  <li><a className="nav-link" href="blank.html"><i className="far fa-square" /> <span>Blank Page</span></a></li>
                  <li className="dropdown">
                    <a href="#" className="nav-link has-dropdown"><i className="fas fa-th" /> <span>Bootstrap</span></a>
                    <ul className="dropdown-menu">
                      <li><a className="nav-link" href="bootstrap-alert.html">Alert</a></li>
                      <li><a className="nav-link" href="bootstrap-badge.html">Badge</a></li>
                      <li><a className="nav-link" href="bootstrap-breadcrumb.html">Breadcrumb</a></li>
                      <li><a className="nav-link" href="bootstrap-buttons.html">Buttons</a></li>
                      <li><a className="nav-link" href="bootstrap-card.html">Card</a></li>
                      <li><a className="nav-link" href="bootstrap-carousel.html">Carousel</a></li>
                      <li><a className="nav-link" href="bootstrap-collapse.html">Collapse</a></li>
                      <li><a className="nav-link" href="bootstrap-dropdown.html">Dropdown</a></li>
                      <li><a className="nav-link" href="bootstrap-form.html">Form</a></li>
                      <li><a className="nav-link" href="bootstrap-list-group.html">List Group</a></li>
                      <li><a className="nav-link" href="bootstrap-media-object.html">Media Object</a></li>
                      <li><a className="nav-link" href="bootstrap-modal.html">Modal</a></li>
                      <li><a className="nav-link" href="bootstrap-nav.html">Nav</a></li>
                      <li><a className="nav-link" href="bootstrap-navbar.html">Navbar</a></li>
                      <li><a className="nav-link" href="bootstrap-pagination.html">Pagination</a></li>
                      <li><a className="nav-link" href="bootstrap-popover.html">Popover</a></li>
                      <li><a className="nav-link" href="bootstrap-progress.html">Progress</a></li>
                      <li><a className="nav-link" href="bootstrap-table.html">Table</a></li>
                      <li><a className="nav-link" href="bootstrap-tooltip.html">Tooltip</a></li>
                      <li><a className="nav-link" href="bootstrap-typography.html">Typography</a></li>
                    </ul>
                  </li>
                  <li className="menu-header">CodiePie</li>
                  <li className="dropdown">
                    <a href="#" className="nav-link has-dropdown"><i className="fas fa-th-large" /> <span>Components</span></a>
                    <ul className="dropdown-menu">
                      <li><a className="nav-link" href="components-article.html">Article</a></li>
                      <li><a className="nav-link beep beep-sidebar" href="components-avatar.html">Avatar</a></li>
                      <li><a className="nav-link" href="components-chat-box.html">Chat Box</a></li>
                      <li><a className="nav-link beep beep-sidebar" href="components-empty-state.html">Empty State</a></li>
                      <li><a className="nav-link" href="components-gallery.html">Gallery</a></li>
                      <li><a className="nav-link beep beep-sidebar" href="components-hero.html">Hero</a></li>
                      <li><a className="nav-link" href="components-multiple-upload.html">Multiple Upload</a></li>
                      <li><a className="nav-link beep beep-sidebar" href="components-pricing.html">Pricing</a></li>
                      <li><a className="nav-link" href="components-statistic.html">Statistic</a></li>
                      <li><a className="nav-link" href="components-tab.html">Tab</a></li>
                      <li><a className="nav-link" href="components-table.html">Table</a></li>
                      <li><a className="nav-link" href="components-user.html">User</a></li>
                      <li><a className="nav-link beep beep-sidebar" href="components-wizard.html">Wizard</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="nav-link has-dropdown"><i className="far fa-file-alt" /> <span>Forms</span></a>
                    <ul className="dropdown-menu">
                      <li><a className="nav-link" href="forms-advanced-form.html">Advanced Form</a></li>
                      <li><a className="nav-link" href="forms-editor.html">Editor</a></li>
                      <li><a className="nav-link" href="forms-validation.html">Validation</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="nav-link has-dropdown"><i className="fas fa-map-marker-alt" /> <span>Google Maps</span></a>
                    <ul className="dropdown-menu">
                      <li><a href="gmaps-advanced-route.html">Advanced Route</a></li>
                      <li><a href="gmaps-draggable-marker.html">Draggable Marker</a></li>
                      <li><a href="gmaps-geocoding.html">Geocoding</a></li>
                      <li><a href="gmaps-geolocation.html">Geolocation</a></li>
                      <li><a href="gmaps-marker.html">Marker</a></li>
                      <li><a href="gmaps-multiple-marker.html">Multiple Marker</a></li>
                      <li><a href="gmaps-route.html">Route</a></li>
                      <li><a href="gmaps-simple.html">Simple</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="nav-link has-dropdown"><i className="fas fa-plug" /> <span>Modules</span></a>
                    <ul className="dropdown-menu">
                      <li className="menu-sub-header">Apps</li>
                      <li><a className="nav-link" href="modules-calendar.html">Calendar</a></li>
                      <li className="menu-sub-header">Charts</li>
                      <li><a className="nav-link" href="modules-chartjs.html">ChartJS</a></li>
                      <li><a className="nav-link" href="modules-apex-charts.html">Apex Charts</a></li>
                      <li><a className="nav-link" href="modules-e-charts.html">E Charts</a></li>
                      <li><a className="nav-link" href="modules-c3-charts.html">C3 Charts</a></li>
                      <li><a className="nav-link" href="modules-knob-charts.html">Knob Charts</a></li>
                      <li><a className="nav-link" href="modules-sparkline.html">Sparkline</a></li>
                      <li className="menu-sub-header">Tables</li>
                      <li><a className="nav-link" href="modules-datatables.html">DataTables</a></li>
                      <li><a className="nav-link" href="modules-table-more.html">More</a></li>
                      <li className="menu-sub-header">Font Icons</li>
                      <li><a className="nav-link" href="modules-font-awesome.html">Font Awesome</a></li>
                      <li><a className="nav-link" href="modules-line-icons.html">Line Icons</a></li>
                      <li><a className="nav-link" href="modules-feather-icons.html">Feather Icons</a></li>
                      <li><a className="nav-link" href="modules-ion-icons.html">Ion Icons</a></li>
                      <li><a className="nav-link" href="modules-flag.html">Flag</a></li>
                      <li><a className="nav-link" href="modules-weather-icon.html">Weather Icon</a></li>
                      <li className="menu-sub-header">Other</li>
                      <li><a className="nav-link" href="modules-owl-carousel.html">Owl Carousel</a></li>
                      <li><a className="nav-link" href="modules-sweet-alert.html">Sweet Alert</a></li>
                      <li><a className="nav-link" href="modules-toastr.html">Toastr</a></li>
                      <li><a className="nav-link" href="modules-vector-map.html">Vector Map</a></li>
                    </ul>
                  </li>
                  <li className="menu-header">Pages</li>
                  <li className="dropdown">
                    <a href="#" className="nav-link has-dropdown"><i className="far fa-user" /> <span>Auth</span></a>
                    <ul className="dropdown-menu">
                      <li><a href="auth-forgot-password.html">Forgot Password</a></li> 
                      <li><a href="auth-login.html">Login</a></li> 
                      <li><a href="auth-register.html">Register</a></li> 
                      <li><a href="auth-reset-password.html">Reset Password</a></li> 
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="nav-link has-dropdown"><i className="fas fa-exclamation" /> <span>Errors</span></a>
                    <ul className="dropdown-menu">
                      <li><a className="nav-link" href="errors-503.html">503</a></li> 
                      <li><a className="nav-link" href="errors-403.html">403</a></li> 
                      <li><a className="nav-link" href="errors-404.html">404</a></li> 
                      <li><a className="nav-link" href="errors-500.html">500</a></li> 
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="nav-link has-dropdown"><i className="fas fa-bicycle" /> <span>Features</span></a>
                    <ul className="dropdown-menu">
                      <li><a className="nav-link" href="features-activities.html">Activities</a></li>
                      <li><a className="nav-link" href="features-post-create.html">Post Create</a></li>
                      <li><a className="nav-link" href="features-posts.html">Posts</a></li>
                      <li><a className="nav-link" href="features-profile.html">Profile</a></li>
                      <li><a className="nav-link" href="features-settings.html">Settings</a></li>
                      <li><a className="nav-link" href="features-setting-detail.html">Setting Detail</a></li>
                      <li><a className="nav-link" href="features-tickets.html">Tickets</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="nav-link has-dropdown"><i className="fas fa-ellipsis-h" /> <span>Utilities</span></a>
                    <ul className="dropdown-menu">
                      <li><a href="utilities-contact.html">Contact</a></li>
                      <li><a className="nav-link" href="utilities-invoice.html">Invoice</a></li>
                      <li><a href="utilities-subscribe.html">Subscribe</a></li>
                    </ul>
                  </li>
                  <li><a className="nav-link" href="credits.html"><i className="fas fa-pencil-ruler" /> <span>Credits</span></a></li>
                </ul>
                <div className="mt-4 mb-4 p-3 hide-sidebar-mini">
                  <a href="https://getcodiepie.com/docs" className="btn btn-primary btn-lg btn-block btn-icon-split"><i className="fas fa-rocket" /> Documentation</a>
                </div>
              </aside>
            </div>
            {/* Start app main Content */}
            <div className="main-content">
              <section className="section">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="card card-statistic-2">
                      <div className="card-stats">
                        <div className="card-stats-title">Order Statistics - 
                          <div className="dropdown d-inline">
                            <a className="font-weight-600 dropdown-toggle" data-toggle="dropdown" href="#" id="orders-month">August</a>
                            <ul className="dropdown-menu dropdown-menu-sm">
                              <li className="dropdown-title">Select Month</li>
                              <li><a href="#" className="dropdown-item">January</a></li>
                              <li><a href="#" className="dropdown-item">February</a></li>
                              <li><a href="#" className="dropdown-item">March</a></li>
                              <li><a href="#" className="dropdown-item">April</a></li>
                              <li><a href="#" className="dropdown-item">May</a></li>
                              <li><a href="#" className="dropdown-item">June</a></li>
                              <li><a href="#" className="dropdown-item">July</a></li>
                              <li><a href="#" className="dropdown-item active">August</a></li>
                              <li><a href="#" className="dropdown-item">September</a></li>
                              <li><a href="#" className="dropdown-item">October</a></li>
                              <li><a href="#" className="dropdown-item">November</a></li>
                              <li><a href="#" className="dropdown-item">December</a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="card-stats-items">
                          <div className="card-stats-item">
                            <div className="card-stats-item-count">24</div>
                            <div className="card-stats-item-label">Pending</div>
                          </div>
                          <div className="card-stats-item">
                            <div className="card-stats-item-count">12</div>
                            <div className="card-stats-item-label">Shipping</div>
                          </div>
                          <div className="card-stats-item">
                            <div className="card-stats-item-count">23</div>
                            <div className="card-stats-item-label">Completed</div>
                          </div>
                        </div>
                      </div>
                      <div className="card-icon shadow-primary bg-primary">
                        <i className="fas fa-archive" />
                      </div>
                      <div className="card-wrap">
                        <div className="card-header">
                          <h4>login Users</h4>
                        </div>
                        <div className="card-body">
                          59
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="card card-statistic-2">
                      <div className="card-chart">
                        <canvas id="balance-chart" height={80} />
                      </div>
                      <div className="card-icon shadow-primary bg-primary">
                        <i className="fas fa-dollar-sign" />
                      </div>
                      <div className="card-wrap">
                        <div className="card-header">
                          <h4>Products</h4>
                        </div>
                        <div className="card-body">
                          $187,13
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="card card-statistic-2">
                      <div className="card-chart">
                        <canvas id="sales-chart" height={80} />
                      </div>
                      <div className="card-icon shadow-primary bg-primary">
                        <i className="fas fa-shopping-bag" />
                      </div>
                      <div className="card-wrap">
                        <div className="card-header">
                          <h4>Orders</h4>
                        </div>
                        <div className="card-body">
                          4,732
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            
              </section>
            </div>
            {/* Start app Footer part */}
            <footer className="main-footer">
              <div className="footer-left">
                <div className="bullet" />  <a href="templateshub.net">Templates Hub</a>
              </div>
              <div className="footer-right">
              </div>
            </footer>
          </div>
        </div>
        
      </div>


    </div>
  )
}
