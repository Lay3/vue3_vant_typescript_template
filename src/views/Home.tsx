import { defineComponent, ref } from "vue";

import HelloWorld from "@/components/HelloWorld";

const Home = defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    let text = ref("hello, vue3 + vant + typescript");

    const textSlots = {
      text: () => <span>toggle</span>,
    };

    return () => (
      <div>
        <p>{text.value}</p>
        <HelloWorld v-model={[text.value, "message"]} v-slots={textSlots} />
      </div>
    );
  },
});

export default Home;
