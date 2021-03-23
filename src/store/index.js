import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: "m1",
          image:
            "https://fancycrave.com/wp-content/uploads/2019/12/Free-Nature-Pictures-min.jpg",
          title: "pjese nga dibra",
          description: "Malet e dibers",
        },
        {
          id: "m2",
          image:
            "https://www.mvrdv.nl/media/uploads/DowntownOneTirana_plaza.jpg",
          title: "pjese nga Tirana",
          description: "Malet e Tiranes",
        },
        {
          id: "m3",
          image:
            "http://www.premiumgroup-al.com/web/wp-content/uploads/2017/07/Shkodra-1024x683.jpg",
          title: "pjese nga Shkodra",
          description: "Malet e Shkodres",
        },
      ],
    };
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description,
      };

      state.memories.unshift(newMemory);
    },
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit("addMemory", memoryData);
    },
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
});

export default store;
