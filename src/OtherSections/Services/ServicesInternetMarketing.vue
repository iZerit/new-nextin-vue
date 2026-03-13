<template>
  <section class="service_sectionf">
    <div class="container">
      <div class="services_div">
        <div class="services_inner_div">
          <!-- Header Section -->
          <div class="programming_inner">
            <div class="services_title text-center mb-4 mt-5">
              <div class="section-icon">
                <i class="fa-solid fa-arrow-trend-up"></i>
              </div>
              <h2>{{ $t('internet_marketing') }}</h2>
              <div class="section-line"></div>
            </div>
            <div class="programming_info text-center mb-5">
              <p>{{ $t('internet_marketing_intro') }}</p>
            </div>
          </div>

          <!-- Services Cards Grid -->
          <div class="services-cards-grid">
            
            <!-- Marketing Strategy Card -->
            <div class="service-card">
              <div class="card-glow"></div>
              <div class="card-content">
                <div class="card-icon">
                  <i class="fa-solid fa-chess"></i>
                </div>
                <div class="card-image">
                    <img class="img-fluid" src="/src/assets/services/marketing/markating-strategy-pic.png" alt="">
                </div>
                <h3 class="card-title">{{ $t('marketing_strategy') }}</h3>
                <p class="card-text">{{ $t('marketing_strategy_desc') }}</p>
                <div class="card-features">
                  <span class="feature-tag">Strategy</span>
                  <span class="feature-tag">Planning</span>
                  <span class="feature-tag">Analysis</span>
                </div>
              </div>
            </div>

            <!-- Marketing Audit Card -->
            <div class="service-card">
              <div class="card-glow"></div>
              <div class="card-content">
                <div class="card-icon">
                  <i class="fa-solid fa-clipboard-check"></i>
                </div>
                <div class="card-image">
                    <img class="img-fluid" src="/src/assets/services/marketing/audit-image-scaled.jpg" alt="Marketing Audit">
                </div>
                <h3 class="card-title">{{ $t('marketing_audit') }}</h3>
                <p class="card-text">{{ $t('marketing_audit_desc') }}</p>
                <div class="card-features">
                  <span class="feature-tag">Audit</span>
                  <span class="feature-tag">Report</span>
                  <span class="feature-tag">Recommendations</span>
                </div>
              </div>
            </div>

            <!-- Guerrilla Marketing Card -->
            <div class="service-card">
              <div class="card-glow"></div>
              <div class="card-content">
                <div class="card-icon">
                  <i class="fa-solid fa-rocket"></i>
                </div>
                <div class="card-image">
                    <img class="img-fluid" src="/src/assets/services/marketing/guerrilla-marketing.jpg" alt="Guerrilla Marketing">
                </div>
                <h3 class="card-title">{{ $t('guerrilla_marketing') }}</h3>
                <p class="card-text">{{ $t('guerrilla_marketing_desc') }}</p>
                <div class="card-features">
                  <span class="feature-tag">Creative</span>
                  <span class="feature-tag">Viral</span>
                  <span class="feature-tag">Campaigns</span>
                </div>
              </div>
            </div>

          </div>

          <!-- CTA Section -->
          <div class="cta-section mt-5 mb-5">
            <div class="cta-content text-center">
              <h3>{{ $t('cta_title_marketing') }}</h3>
              <p>{{ $t('cta_text_marketing') }}</p>
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
export default {
  name: "ServicesInternetMarketing"
}
</script>

<style scoped>
.service_sectionf {
  position: relative;
  color: white;
  padding: 2rem 0;
}
</style>
