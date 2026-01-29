export default {
  template: `
        <button
          :class="{
            'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
            'bg-blue-200 hover:bg-blue-400': type === 'primary',
            'bg-purprle-200 hover:bg-purprle-400': type === 'secondary',
            'bg-gray-200 hover:bg-gray-400': type === 'muted',
            'is-loading': processing
          }"
          :disabled="processing"
        >
            <slot />
        </button>
        `,

  props: {
    type: {
      type: String,
      default: "primary",
    },

    processing: {
      type: {
        type: Boolean,
        default: false,
      },
    },
  },
};
