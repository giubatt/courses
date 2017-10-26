<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">{{stock.name}}</h3>
        <small>(Price: {{stock.price}} | Quantity: {{stock.quantity}})</small>
      </div>

      <div class="panel-body">
        <div class="pull-left">
          <input type="number"
                 class="form-control"
                 placeholder="Quantity"
                 v-model.number="quantity">
        </div>
        <div class="pull-right">
          <button class="btn btn-info"
                  @click="sell"
                  :disabled="quantity <= 0 || !Number.isInteger(this.quantity)">
            Sell
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0,
      };
    },
    methods: {
      ...mapActions('portfolio', ['sellStock']),
      sell() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity,
        };
        this.sellStock(order);
      },
    },
  };
</script>
