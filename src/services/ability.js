import { defineAbility } from '@casl/ability';

export default defineAbility((can, cannot) => {
  can('roll', 'Manager');
  cannot('delete', 'User');
});