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
                <i class="fa-brands fa-google"></i>
              </div>
              <h2>{{ $t('google_ads') }}</h2>
              <div class="section-line"></div>
            </div>
            <div class="programming_info text-center mb-5">
              <p>{{ $t('google_ads_intro') }}</p>
            </div>
          </div>

          <!-- Services Cards Grid -->
          <div class="services-cards-grid">
            
            <!-- Search Ads Card -->
            <div class="service-card">
              <div class="card-glow"></div>
              <div class="card-content">
                <div class="card-icon">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div class="card-image">
                  <img class="img-fluid" src="/src/assets/services/ads/GoogleSearchAds-400x400-1.svg" alt="Search Ads">
                </div>
                <h3 class="card-title">{{ $t('google_search_ads') }}</h3>
                <p class="card-text">{{ $t('google_search_ads_desc') }}</p>
                <div class="card-features">
                  <span class="feature-tag">Google</span>
                  <span class="feature-tag">Yandex</span>
                  <span class="feature-tag">PPC</span>
                </div>
              </div>
            </div>

            <!-- Social Ads Card -->
            <div class="service-card">
              <div class="card-glow"></div>
              <div class="card-content">
                <div class="card-icon">
                  <i class="fa-solid fa-share-nodes"></i>
                </div>
                <div class="card-image">
                  <img class="img-fluid" src="/src/assets/services/ads/social-ad.png" alt="Social Ads">

                </div>
                <h3 class="card-title">{{ $t('social_ads') }}</h3>
                <p class="card-text">{{ $t('social_ads_desc') }}</p>
                <div class="card-features">
                  <span class="feature-tag">Facebook</span>
                  <span class="feature-tag">Instagram</span>
                  <span class="feature-tag">Telegram</span>
                </div>
              </div>
            </div>

            <!-- All Platforms Card -->
            <div class="service-card">
              <div class="card-glow"></div>
              <div class="card-content">
                <div class="card-icon">
                  <i class="fa-solid fa-globe"></i>
                </div>
                <div class="card-image">
                  <img class="img-fluid" src="/src/assets/services/ads/all-ads.jpg" alt="All Platforms Ads">
                </div>
                <h3 class="card-title">{{ $t('all_platform_ads') }}</h3>
                <p class="card-text">{{ $t('all_platform_ads_desc') }}</p>
                <div class="card-features">
                  <span class="feature-tag">Multi-platform</span>
                  <span class="feature-tag">Targeting</span>
                  <span class="feature-tag">Analytics</span>
                </div>
              </div>
            </div>

          </div>

          <!-- CTA Section -->
          <div class="cta-section mt-5 mb-5">
            <div class="cta-content text-center">
              <h3>{{ $t('cta_title_ads') }}</h3>
              <p>{{ $t('cta_text_ads') }}</p>
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
  name: "ServicesGoogleAds",
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
