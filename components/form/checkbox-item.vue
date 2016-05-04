<template>
  <li>
    <label class="label-checkbox item-content">
      <slot name="input"></slot>
      <div class="item-media"><i class="icon icon-form-checkbox"></i></div>
      <div class="item-inner">
        <div class="item-title">
          <slot name="title"></slot>
        </div>
      </div>
    </label>
  </li>
</template>
