<template>
    <main class="container">
        <section class="row">
            <section class="col-4 d-none d-xl-block col-xl-3">
                <DashboardSidebar />
            </section>
            <section class="col-xl-9">

                <button class="d-xl-none btn theme-shadow px-2 py-1 rounded-1 mt-3" type="button"
                    data-bs-toggle="offcanvas" data-bs-target="#dashboardMenu" aria-controls="dashboardMenu">
                    <i class="bi bi-chevron-double-right"></i>
                </button>

                <!-- Mobile Menu -->
                <div class="offcanvas offcanvas-start" tabindex="-1" id="dashboardMenu">
                    <div class="offcanvas-header">
                        <button type="button" class="theme-shadow px-2 py-1 rounded-1 btn m-0"
                            data-bs-dismiss="offcanvas" aria-label="Close">
                            <i class="bi bi-chevron-double-left"></i>
                        </button>
                    </div>
                    <div class="offcanvas-body">
                        <DashboardMenu />
                    </div>
                </div>

                <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-dashboard" role="tabpanel"
                        aria-labelledby="v-pills-dashboard-tab" tabindex="0">
                        <DashboardHome />
                    </div>
                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel"
                        aria-labelledby="v-pills-profile-tab" tabindex="0">
                        <DashboardProfile />
                    </div>
                    <div class="tab-pane fade" id="v-pills-courses" role="tabpanel"
                        aria-labelledby="v-pills-courses-tab" tabindex="0">
                        <DashboardCourses />
                    </div>
                    <div class="tab-pane fade" id="v-pills-certificate" role="tabpanel"
                        aria-labelledby="v-pills-certificate-tab" tabindex="0">
                        <DashboardCertificates />
                    </div>
                    <div class="tab-pane fade" id="v-pills-payment" role="tabpanel"
                        aria-labelledby="v-pills-payment-tab" tabindex="0">
                        <DashboardPayment />
                    </div>
                </div>
            </section>
        </section>
    </main>
</template>

<script setup>
import DashboardProfile from '../components/Deshboard/DashboardProfile.vue';
import DashboardHome from '../components/Deshboard/DashboardHome.vue';
import DashboardMenu from '../components/Deshboard/DashboardMenu.vue';
import DashboardSidebar from '../components/Deshboard/DashboardSidebar.vue';
import DashboardCourses from '../components/Deshboard/DashboardCourses.vue';
import DashboardCertificates from '../components/Deshboard/DashboardCertificates.vue';
import DashboardPayment from '../components/Deshboard/DashboardPayment.vue';
</script>
