import { AuthForm } from "@/components/auth/auth-form";

export default function LoginPage() {
  return (
    <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-4rem)] py-8">
      <AuthForm />
    </div>
  );
}