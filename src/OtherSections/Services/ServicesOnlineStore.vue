<template>
  <section class="service_sectionf">
    <div class="container">
      <div class="services_div">
        <div class="services_inner_div">
          <!-- Header Section -->
          <div class="programming_inner">
            <div class="services_title text-center mb-4 mt-5">
              <div class="section-icon">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
              <h2>{{ $t('online_store') }}</h2>
              <div class="section-line"></div>
            </div>
            <div class="programming_info text-center mb-5">
              <p>{{ $t('online_store_intro') }}</p>
            </div>
          </div>

          <!-- Services Cards Grid -->
          <div class="services-cards-grid">
            
            <!-- E-commerce Card -->
            <div class="service-card">
              <div class="card-glow"></div>
              <div class="card-content">
                <div class="card-icon">
                  <i class="fa-solid fa-shop"></i>
                </div>
                <div class="card-image">
                  <img class="img-fluid" src="/src/assets/services/store/e-commers.jpg" alt="E-commerce">

                </div>
                <h3 class="card-title">{{ $t('ecommerce_site') }}</h3>
                <p class="card-text">{{ $t('ecommerce_site_desc') }}</p>
                <div class="card-features">
                  <span class="feature-tag">WooCommerce</span>
                  <span class="feature-tag">Shopify</span>
                  <span class="feature-tag">Custom</span>
                </div>
              </div>
            </div>

            <!-- Product Catalog Card -->
            <div class="service-card">
              <div class="card-glow"></div>
              <div class="card-content">
                <div class="card-icon">
                  <i class="fa-solid fa-box-open"></i>
                </div>
                <div class="card-image">
                  <img class="img-fluid" src="/src/assets/services/store/search.jpg" alt="Product Catalog">
                </div>
                <h3 class="card-title">{{ $t('product_catalog') }}</h3>
                <p class="card-text">{{ $t('product_catalog_desc') }}</p>
                <div class="card-features">
                  <span class="feature-tag">Categories</span>
                  <span class="feature-tag">Filters</span>
                  <span class="feature-tag">Search</span>
                </div>
              </div>
            </div>

            <!-- Payment Integration Card -->
            <div class="service-card">
              <div class="card-glow"></div>
              <div class="card-content">
                <div class="card-icon">
                  <i class="fa-solid fa-credit-card"></i>
                </div>
                <div class="card-image">
                  <img class="img-fluid" src="/src/assets/services/store/pay.jpg" alt="Payment Integration">
                </div>
                <h3 class="card-title">{{ $t('payment_integration') }}</h3>
                <p class="card-text">{{ $t('payment_integration_desc') }}</p>
                <div class="card-features">
                  <span class="feature-tag">Payme</span>
                  <span class="feature-tag">Click</span>
                  <span class="feature-tag">Paynet</span>
                </div>
              </div>
            </div>

          </div>

          <!-- CTA Section -->
          <div class="cta-section mt-5 mb-5">
            <div class="cta-content text-center">
              <h3>{{ $t('cta_title_store') }}</h3>
              <p>{{ $t('cta_text_store') }}</p>
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
  name: "ServicesOnlineStore"
}
</script>

<style scoped>
.service_sectionf {
  position: relative;
  color: white;
  padding: 2rem 0;
}
</style>
