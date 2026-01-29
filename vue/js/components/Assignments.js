import AssignmentList from "./AssignmentList.js";

export default {
  components: {
    AssignmentList,
  },

  template: `
      <assignment-list :assignments="filters.inProgress" title="In Progress" />
      <assignment-list :assignments="filters.completed" title="Completed" />
    `,

  data() {
    return {
      assignments: [
        { id: 1, name: "Learn laravel", complete: false },
        { id: 2, name: "Learn Vue 3", complete: false },
        { id: 3, name: "Finish project QTG", complete: false },
      ],
    };
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter((a) => !a.complete),
        completed: this.assignments.filter((a) => a.complete),
      };
    },
  },
};
