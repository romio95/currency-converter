<template>
  <div class="packages">
    <div class="packages-wrap">
      <div class="container">
        <div class="packages-list">
          <div class="packages-list__row">
            <div class="packages-item">
              <div class="packages-item__label">
                {{ $t('packagesPage.basic') }}
              </div>
              <ul class="packages-item__list">
                <li>
                  {{ $t('packagesPage.chat') }}
                </li>
                <li>{{ $t('packagesPage.encryption') }}</li>
                <li>{{ $t('packagesPage.callsVideo') }}</li>
                <li>{{ $t('packagesPage.holaSecure') }}</li>
                <li>{{ $t('packagesPage.secretChats') }}</li>
                <li>{{ $t('packagesPage.groups') }}</li>
                <li>{{ $t('packagesPage.wallet') }}</li>
                <li>{{ $t('packagesPage.freelancerProgram') }}</li>
              </ul>
              <div class="packages-item__price">
                <span>{{ $t('packagesPage.free') }}</span>
                <p>{{ $t('packagesPage.perYear') }}</p>
              </div>
            </div>
            <div class="packages-item">
              <div class="packages-item__label">
                {{ $t('packagesPage.premium') }}
              </div>
              <ul class="packages-item__list">
                <li>{{ $t('packagesPage.chat') }}</li>
                <li>{{ $t('packagesPage.encryption') }}</li>
                <li>{{ $t('packagesPage.callsVideo') }}</li>
                <li>{{ $t('packagesPage.holaSecure') }}</li>
                <li>{{ $t('packagesPage.secretChats') }}</li>
                <li>{{ $t('packagesPage.groups') }}</li>
                <li>{{ $t('packagesPage.wallet') }}</li>
                <li>{{ $t('packagesPage.freelancerProgram') }}</li>
                <li>{{ $t('packagesPage.campaignOffers') }}</li>
                <li>{{ $t('packagesPage.invisibility') }}</li>
                <li>360K {{ $t('packagesPage.translations') }}</li>
                <li>{{ $t('packagesPage.conferenceCalls') }}</li>
                <li>{{ $t('packagesPage.socialSpace') }}</li>
                <li>{{ $t('packagesPage.tools') }}</li>
              </ul>
              <div class="packages-item__price">
                <span>$29.99</span>
                <p>{{ $t('packagesPage.perYear') }}</p>
              </div>
            </div>
          </div>
          <div class="packages-list__row">
            <div class="packages-item">
              <div class="packages-item__label">
                {{ $t('packagesPage.businessLite') }}
              </div>
              <ul class="packages-item__list">
                <li>{{ $t('packagesPage.chat') }}</li>
                <li>{{ $t('packagesPage.encryption') }}</li>
                <li>{{ $t('packagesPage.callsVideo') }}</li>
                <li>{{ $t('packagesPage.holaSecure') }}</li>
                <li>{{ $t('packagesPage.secretChats') }}</li>
                <li>{{ $t('packagesPage.groups') }}</li>
                <li>{{ $t('packagesPage.wallet') }}</li>
                <li>{{ $t('packagesPage.freelancerProgram') }}</li>
                <li>{{ $t('packagesPage.campaignOffers') }}</li>
                <li>{{ $t('packagesPage.invisibility') }}</li>
                <li>1.92M {{ $t('packagesPage.translations') }}</li>
                <li>{{ $t('packagesPage.conferenceCalls') }}</li>
                <li>{{ $t('packagesPage.tools') }}</li>
                <li>{{ $t('packagesPage.noAds') }}</li>
              </ul>
              <div class="packages-item__price">
                <span>$89.99</span>
                <p>{{ $t('packagesPage.perYear') }}</p>
              </div>
            </div>
            <div class="packages-item">
              <div class="packages-item__label">
                {{ $t('packagesPage.influencer') }}
              </div>
              <ul class="packages-item__list">
                <li>{{ $t('packagesPage.chat') }}</li>
                <li>{{ $t('packagesPage.encryption') }}</li>
                <li>{{ $t('packagesPage.callsVideo') }}</li>
                <li>{{ $t('packagesPage.holaSecure') }}</li>
                <li>{{ $t('packagesPage.secretChats') }}</li>
                <li>{{ $t('packagesPage.groups') }}</li>
                <li>{{ $t('packagesPage.wallet') }}</li>
                <li>{{ $t('packagesPage.freelancerProgram') }}</li>
                <li>{{ $t('packagesPage.campaignRevenueStreams') }}</li>
                <li>{{ $t('packagesPage.invisibility') }}</li>
                <li>{{ $t('packagesPage.conferenceCalls') }}</li>
                <li>{{ $t('packagesPage.socialSpace') }}</li>
                <li>{{ $t('packagesPage.tools') }}</li>
              </ul>
              <div class="packages-item__price">
                <span>{{ $t('packagesPage.free') }}</span>
                <p>{{ $t('packagesPage.perYear') }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="packages-use">
          <div class="packages-use__title">
            {{ $t('packagesPage.howToUse') }}
          </div>
          <div class="packages-use__list">
            <a href="" @click.prevent="showVideoPopup('secure',currentLocale)" class="packages-use__item">
              <div class="packages-use__item-img">
                <img src="../../assets/img/packages/play-green.png" alt="">
              </div>
              <div class="packages-use__item-title">
                {{ $t('packagesPage.holaSecure') }}
              </div>
            </a>
            <a href="" @click.prevent="showVideoPopup('encryption',currentLocale)" class="packages-use__item">
              <div class="packages-use__item-img">
                <img src="../../assets/img/packages/play-green.png" alt="">
              </div>
              <div class="packages-use__item-title">
                {{ $t('packagesPage.encryption') }}
              </div>
            </a>
            <a href="" @click.prevent="showVideoPopup('freelancer',currentLocale)" class="packages-use__item">
              <div class="packages-use__item-img">
                <img src="../../assets/img/packages/play-green.png" alt="">
              </div>
              <div class="packages-use__item-title">
                 {{ $t('packagesPage.freelancer') }}
              </div>
            </a>
            <a href="" @click.prevent="showVideoPopup('secretChat',currentLocale)" class="packages-use__item">
              <div class="packages-use__item-img">
                <img src="../../assets/img/packages/play-green.png" alt="">
              </div>
              <div class="packages-use__item-title">
                {{ $t('packagesPage.secretChats') }}
              </div>
            </a>
            <a href="" @click.prevent="showVideoPopup('invisibility',currentLocale)" class="packages-use__item">
              <div class="packages-use__item-img">
                <img src="../../assets/img/packages/play-green.png" alt="">
              </div>
              <div class="packages-use__item-title">
                {{ $t('packagesPage.invisibility') }}
              </div>
            </a>
            <a href="" @click.prevent="showVideoPopup('howToRegister',currentLocale)" class="packages-use__item">
              <div class="packages-use__item-img">
                <img src="../../assets/img/packages/play-green.png" alt="">
              </div>
              <div class="packages-use__item-title">
                {{ $t('packagesPage.howToRegister') }}
              </div>
            </a>
            <a href="" @click.prevent="showVideoPopup('pinEntry',currentLocale)" class="packages-use__item">
              <div class="packages-use__item-img">
                <img src="../../assets/img/packages/play-green.png" alt="">
              </div>
              <div class="packages-use__item-title">
                {{ $t('packagesPage.pinEntry') }}
              </div>
            </a>
            <a href="" @click.prevent="showVideoPopup('freelancerRegistration',currentLocale)" class="packages-use__item">
              <div class="packages-use__item-img">
                <img src="../../assets/img/packages/play-green.png" alt="">
              </div>
              <div class="packages-use__item-title">
                {{ $t('packagesPage.freelancerRegistration') }}
              </div>
            </a>
            <a href="" @click.prevent="showVideoPopup('socialSpace',currentLocale)" class="packages-use__item">
              <div class="packages-use__item-img">
                <img src="../../assets/img/packages/play-green.png" alt="">
              </div>
              <div class="packages-use__item-title">
                {{ $t('packagesPage.socialSpace') }}
                <span> {{ $t('packagesPage.comingSoon') }}</span>
              </div>
            </a>
            <a href="" @click.prevent="showVideoPopup('campaigns',currentLocale)" class="packages-use__item">
              <div class="packages-use__item-img">
                <img src="../../assets/img/packages/play-green.png" alt="">
              </div>
              <div class="packages-use__item-title">
                {{ $t('packagesPage.campaigns') }}
                <span>{{ $t('packagesPage.comingSoon') }}</span>
              </div>
            </a>
            <a href="" @click.prevent="showVideoPopup('campaigns',currentLocale)" class="packages-use__item">
              <div class="packages-use__item-img">
                <img src="../../assets/img/packages/play-green.png" alt="">
              </div>
              <div class="packages-use__item-title">
                {{ $t('packagesPage.chatFeatures') }}
                <span>{{ $t('packagesPage.comingSoon') }}</span>
              </div>
            </a>
            <a href="" @click.prevent="showVideoPopup('campaigns',currentLocale)" class="packages-use__item">
              <div class="packages-use__item-img">
                <img src="../../assets/img/packages/play-green.png" alt="">
              </div>
              <div class="packages-use__item-title">
                {{ $t('packagesPage.groups') }}
                <span>{{ $t('packagesPage.comingSoon') }}</span>
              </div>
            </a>
            <a href="" @click.prevent="showVideoPopup('campaigns',currentLocale)" class="packages-use__item">
              <div class="packages-use__item-img">
                <img src="../../assets/img/packages/play-green.png" alt="">
              </div>
              <div class="packages-use__item-title">
                {{ $t('packagesPage.translations') }}
                <span>{{ $t('packagesPage.comingSoon') }}</span>
              </div>
            </a>
            <a href="" @click.prevent="showVideoPopup('campaigns',currentLocale)" class="packages-use__item">
              <div class="packages-use__item-img">
                <img src="../../assets/img/packages/play-green.png" alt="">
              </div>
              <div class="packages-use__item-title">
                {{ $t('packagesPage.conferenceCalls') }}
                <span>{{ $t('packagesPage.comingSoon') }}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- style-->
<style src="./index.scss" lang="scss"></style>
<!-- scripts-->
<script src="./index.js"></script>
