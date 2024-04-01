export const API_URL = "https://react-native-e-commerce-backend.onrender.com";

export async function changePassword(
  userId,
  currentPassword,
  newPassword,
  confirmNewPassword
) {
  try {
    if (!userId || !currentPassword || !newPassword || !confirmNewPassword)
      throw new Error(
        "userId, currentPassword, newPassword, and ConfirmNewPassword must be"
      );
    if (newPassword === confirmNewPassword)
      throw new Error("New passwords do not match");

    if (newPassword.length < 8)
      throw new Error("Password must be at least 8 digits");

    const { data } = await put(`${API_URL}/api/change-password/${userId}`, {
      currentPassword,
      newPassword,
      ConfirmnewPassword: confirmNewPassword,
    });

    if (data.ok != true) throw new Error("server returned");

    return data.ok;
  } catch (error) {
    console.error(error);
  }
}
