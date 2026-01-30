import AssignmentList from "./AssignmentList.js";

export default {
  components: {
    AssignmentList,
  },

  template: `
    <section class="space-y-6">
      <assignment-list :assignments="filters.inProgress" title="In Progress" />
      <assignment-list :assignments="filters.completed" title="Completed" />

      <form>
        <div class="broder border-gray-600 text-black">
          <input placeholder="New Assignment..." class="p-2" />
          <button type="submit" class="bg-white p-2 border-l">Add</button>
        </div>
      </form>
    </section>
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
