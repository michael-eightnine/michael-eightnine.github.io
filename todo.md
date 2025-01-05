
Moving from open to closed is working fine
Moving from closed to open needs work:
- Assume a single "open" zone? Make it fixed dimensions so we can reference those when expanding a closed panel
  - If this is the case, opening one would need to close the other
- If not, configure open sizing requirements in a config that can be referenced by the placement provider
  - This would set up different sized content
- When closing a menu item, it should take the place after the last one
  - How can we transition others if a section in the middle of this dock list is opened?

Build "button" mode for section for when it is close
