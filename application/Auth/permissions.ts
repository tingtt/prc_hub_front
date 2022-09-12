type Permission = {
  isAblePostingEvents: boolean
  isAbleManaging: boolean
  isAdmin: boolean
}

export const getPermissions = (): Permission => {
  // TODO: check permission
  return {
    isAblePostingEvents: true,
    isAbleManaging: true,
    isAdmin: true,
  }
}
