<template>
  <section class="service_sectionf">
    <div class="container">
      <div class="services_div">
        <div class="services_inner_div">
          <ServiceNavigation />
          <!-- Header Section -->
          <div class="programming_inner">
            <div class="services_title text-center mb-4 mt-5">
              <div class="section-icon">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <h2>{{ $t('email_marketing') }}</h2>
              <div class="section-line"></div>
            </div>
            <div class="programming_info text-center mb-5">
              <p>{{ $t('email_marketing_intro') }}</p>
            </div>
          </div>

          <!-- Services Cards Grid -->
          <div class="services-cards-grid">
            
            <!-- Email Campaigns Card -->
            <div class="service-card ">
              <div class="card-glow"></div>
              <div class="card-content">
                <div class="card-icon">
                  <i class="fa-regular fa-paper-plane"></i>
                </div>
                <div class="card-image">
                  <img class="img-fluid" src="/src/assets/services/email/mail-marketing.jpg" alt="Email Campaigns">
                </div>
                <h3 class="card-title">{{ $t('email_campaigns') }}</h3>
                <p class="card-text">{{ $t('email_campaigns_desc') }}</p>
                <div class="card-features">
                  <span class="feature-tag">Templates</span>
                  <span class="feature-tag">Automation</span>
                  <span class="feature-tag">Tracking</span>
                </div>
              </div>
            </div>

            <!-- Newsletter Card -->
            <div class="service-card">
              <div class="card-glow"></div>
              <div class="card-content">
                <div class="card-icon">
                  <i class="fa-regular fa-newspaper"></i>
                </div>
                <div class="card-image">
                  <img class="img-fluid" src="/src/assets/services/email/newsletter.jpg" alt="Newsletter">
                </div>
                <h3 class="card-title">{{ $t('newsletter') }}</h3>
                <p class="card-text">{{ $t('newsletter_desc') }}</p>
                <div class="card-features">
                  <span class="feature-tag">Weekly</span>
                  <span class="feature-tag">Monthly</span>
                  <span class="feature-tag">Custom</span>
                </div>
              </div>
            </div>

            <!-- Push Notifications Card -->
            <div class="service-card">
              <div class="card-glow"></div>
              <div class="card-content">
                <div class="card-icon">
                  <i class="fa-regular fa-bell"></i>
                </div>
                <div class="card-image">
                  <img class="img-fluid" src="/src/assets/services/email/push-ads.jpg" alt="Push Notifications">
                </div>
                <h3 class="card-title">{{ $t('push_ads') }}</h3>
                <p class="card-text">{{ $t('push_ads_desc') }}</p>
                <div class="card-features">
                  <span class="feature-tag">Web Push</span>
                  <span class="feature-tag">Mobile</span>
                  <span class="feature-tag">Retargeting</span>
                </div>
              </div>
            </div>

          </div>

          <!-- CTA Section -->
          <div class="cta-section mt-5 mb-5">
            <div class="cta-content text-center">
              <h3>{{ $t('cta_title_email') }}</h3>
              <p>{{ $t('cta_text_email') }}</p>
              <router-link to="/narxlar_xizmatlar" class="cta-button">
                <span>{{ $t('cta_button') }}</span>
                <i class="fa-solid fa-arrow-right"></i>
              </router-link>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ServiceNavigation from '../../components/ServiceNavigation.vue';

export default {
  name: "ServicesEmailMarketing",
  components: {
    ServiceNavigation
  }
}
</script>

<style scoped>
.service_sectionf {
  position: relative;
  color: white;
  padding: 2rem 0;
}
</style>
