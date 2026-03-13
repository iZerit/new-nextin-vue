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
                <i class="fa-solid fa-pen-nib"></i>
              </div>
              <h2>{{ $t('design_title') }}</h2>
              <div class="section-line"></div>
            </div>
            <div class="programming_info text-center mb-5">
              <p>{{ $t('design_intro') }}</p>
            </div>
          </div>

          <!-- Services Cards Grid -->
          <div class="services-cards-grid">
            
            <!-- Interface Design Card -->
            <div class="service-card">
              <div class="card-glow"></div>
              <div class="card-content">
                <div class="card-icon">
                  <i class="fa-solid fa-layer-group"></i>
                </div>
                <div class="card-image">
                  <img class="img-fluid" src="/src/assets/services/webdesign/1.png" alt="Interface Design">
                </div>
                <h3 class="card-title">{{ $t('design_interface_title') }}</h3>
                <p class="card-text">{{ $t('design_interface_intro') }}</p>
                <div class="card-features">
                  <span class="feature-tag">UI Design</span>
                  <span class="feature-tag">Wireframe</span>
                  <span class="feature-tag">Prototype</span>
                </div>
              </div>
            </div>

            <!-- Visual Identity Card -->
            <div class="service-card">
              <div class="card-glow"></div>
              <div class="card-content">
                <div class="card-icon">
                  <i class="fa-solid fa-palette"></i>
                </div>
                <div class="card-image">
                  <img class="img-fluid" src="/src/assets/services/webdesign/2.png" alt="Visual Identity">
                </div>
                <h3 class="card-title">Veb-saytning vizual identifikatori</h3>
                <p class="card-text">Veb-saytning vizual identifikatori kontentni u mo'ljallangan maqsadli guruhga moslashtirishni o'z ichiga oladi. Maqsadli guruh ehtiyojlariga qarab yo'naltirilgan boshqa maqsadli guruhlarga yo'naltiriladi.</p>
                <div class="card-features">
                  <span class="feature-tag">Branding</span>
                  <span class="feature-tag">Colors</span>
                  <span class="feature-tag">Typography</span>
                </div>
              </div>
            </div>

            <!-- User Experience Card -->
            <div class="service-card">
              <div class="card-glow"></div>
              <div class="card-content">
                <div class="card-icon">
                  <i class="fa-solid fa-users"></i>
                </div>
                <div class="card-image">
                  <img class="img-fluid" src="/src/assets/services/webdesign/3.png" alt="User Experience">
                </div>
                <h3 class="card-title">Foydalanuvchi tajribasi</h3>
                <p class="card-text">Foydalanuvchi tajribasi - bu veb-saytingizga tashrif buyuruvchilarning kontent, veb-saytning ishlash usuli va tarkibiy qismlarning joylashuvini tushunish haqidagi taassurotlari.</p>
                <div class="card-features">
                  <span class="feature-tag">UX</span>
                  <span class="feature-tag">Usability</span>
                  <span class="feature-tag">Testing</span>
                </div>
              </div>
            </div>

            <!-- Code Quality Card -->
            <div class="service-card">
              <div class="card-glow"></div>
              <div class="card-content">
                <div class="card-icon">
                  <i class="fa-solid fa-code"></i>
                </div>
                <div class="card-image">
                  <img class="img-fluid" src="/src/assets/services/webdesign/4.png" alt="Code Quality">
                </div>
                <h3 class="card-title">Kod sifati</h3>
                <p class="card-text">Kodning sifati, birinchi navbatda, shaffoflikda, ya'ni kodning o'qilishi va sahifaning boshida to'g'ri DOCTYPE deklaratsiyasi tufayli tizim tan oladigan xatolikda namoyon bo'ladi.</p>
                <div class="card-features">
                  <span class="feature-tag">Clean Code</span>
                  <span class="feature-tag">W3C Valid</span>
                  <span class="feature-tag">SEO Ready</span>
                </div>
              </div>
            </div>

          </div>

          <!-- CTA Section -->
          <div class="cta-section mt-5 mb-5">
            <div class="cta-content text-center">
              <h3>{{ $t('cta_title_design') }}</h3>
              <p>{{ $t('cta_text_design') }}</p>
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
  name: "ServicesDesign",
  components: {
    ServiceNavigation
  }
}
</script>

<style scoped>
/* Enhanced Design Section Styles */
.service_sectionf {
  position: relative;
  color: white;
  padding: 2rem 0;
}

.section-icon {
  font-size: 3rem;
  color: #ff1d1d;
  margin-bottom: 1rem;
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    text-shadow: 0 0 10px rgba(255, 29, 29, 0.5);
  }
  50% {
    text-shadow: 0 0 25px rgba(255, 29, 29, 0.8);
  }
}

.section-line {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, transparent, #ff1d1d, transparent);
  margin: 1rem auto;
  border-radius: 2px;
}

/* Services Cards Grid */
.services-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.service-card {
  position: relative;
  background: rgba(34, 34, 73, 0.6);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 29, 29, 0.2);
  backdrop-filter: blur(10px);
}

.service-card:hover {
  transform: translateY(-10px);
  border-color: rgba(255, 29, 29, 0.6);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 29, 29, 0.15) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.service-card:hover .card-glow {
  opacity: 1;
}

.card-content {
  position: relative;
  padding: 2rem;
  z-index: 1;
}

.card-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #ff1d1d, #ff6b6b);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: white;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 30px rgba(255, 29, 29, 0.3);
  transition: transform 0.3s ease;
}

.service-card:hover .card-icon {
  transform: scale(1.1) rotate(5deg);
}

.card-image {
  margin-bottom: 1.5rem;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
}

.card-image img {
  border-radius: 8px;
  transition: transform 0.4s ease;
}

.service-card:hover .card-image img {
  transform: scale(1.05);
}

.card-title {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;
  font-weight: 600;
}

.card-text {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.card-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.feature-tag {
  background: rgba(255, 29, 29, 0.2);
  color: #ff1d1d;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 29, 29, 0.3);
}

.service-card:hover .feature-tag {
  background: rgba(255, 29, 29, 0.3);
  transform: translateY(-2px);
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, rgba(34, 34, 73, 0.8), rgba(255, 29, 29, 0.1));
  border-radius: 20px;
  padding: 3rem 2rem;
  border: 1px solid rgba(255, 29, 29, 0.3);
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, #ff1d1d, transparent);
}

.cta-content h3 {
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 0.5rem;
}

.cta-content p {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #ff1d1d, #ff6b6b);
  color: white;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(255, 29, 29, 0.3);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(255, 29, 29, 0.4);
  color: white;
}

.cta-button i {
  transition: transform 0.3s ease;
}

.cta-button:hover i {
  transform: translateX(5px);
}

/* Responsive */
@media (max-width: 768px) {
  .services-cards-grid {
    grid-template-columns: 1fr;
  }
  
  .card-content {
    padding: 1.5rem;
  }
  
  .cta-content h3 {
    font-size: 1.4rem;
  }
}
</style>
