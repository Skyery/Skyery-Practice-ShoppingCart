<template>
  <div class="hover-card">
    <div class="card-title">
      <div class="titleCurrencyBarL"></div>
      <div class="titleCurrencyBarR"></div>
      <div class="titleCurrencyText">
        <span>
          <slot name="name"></slot>
        </span>
      </div>
    </div>
    <div class="card-content">
      <slot name="category"></slot>
      <div class="currencySeparator"></div>
      <span class="description_Mod">
        <slot name="description_1"></slot>
      </span>
      <div class="currencySeparator"></div>
      <span class="description_Des">
        <slot name="description_2"></slot>
      </span>
    </div>
    <div class="card-img">
      <slot name="src"></slot>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.top-sm {
  transform-origin: bottom left;
  left: 0;
  bottom: 100%;
}
.bottom-sm {
  transform-origin: top left;
  left: 0;
  top: 100%;
}
.center {
  transform-origin: left center;
  left: 100%;
  bottom: 50%;
  transform: translate(0, 50%);
}
.top {
  transform-origin: bottom center;
  left: 50%;
  bottom: 100%;
  transform: translate(-50%);
}
.bottom {
  transform-origin: top center;
  left: 50%;
  top: 100%;
  transform: translate(-50%);
}
.hover-card {
  pointer-events: none;
  position: absolute;
  width: 350px;
  z-index: 5;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  background-color: black;
  text-align: center;

  .card-title {
    position: relative;
    height: 34px;
    background: url("~@/assets/ItemsHeaderCurrencyMiddle.png") repeat-x top left;

    .titleCurrencyBarL {
      background: url("~@/assets/ItemsHeaderCurrencyLeft.png") no-repeat top
        left;
      height: 34px;
      width: 29px;
      position: absolute;
    }
    .titleCurrencyBarR {
      background: url("~@/assets/ItemsHeaderCurrencyRight.png");
      height: 34px;
      width: 29px;
      right: 0;
      position: absolute;
    }

    .titleCurrencyText {
      height: 34px;
      padding: 1px;
      color: gray;

      > span {
        font-size: 18px;
      }
    }
  }

  .card-content {
    padding: 2px;
    color: gray;
    font-size: 0.95rem;

    .currencySeparator {
      height: 8px;
      margin: 1px 0;
      background: url("~@/assets/ItemsSeparatorCurrency.png") no-repeat center;
    }

    .description_Mod {
      color: #8888ff;
    }
  }

  .card-img > img {
    vertical-align: middle;
  }
}
</style>