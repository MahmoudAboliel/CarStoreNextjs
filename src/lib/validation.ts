import { z } from "zod";

// const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp"
];

export const RegisterUserSchema = z.object({
    userName: z
    .string({
        required_error: "Name is required"
    })
    .min(3, "Name too short")
    .max(30, "Name too long"),

    email: z
    .string({
        required_error: "Email is required"
    })
    .email("Invalid email"),

    password: z
    .string({
        required_error: "Password is required"
    })
    .min(8, "Length must be 8 characters")
    .max(16)
    .regex(/[A-Z]/, "Missing one uppercase letter")
    .regex(/[a-z]/, "Missing one lowercase letter")
    .regex(/[0-9]/, "Missing one number")
    .regex(/[^A-Za-z0-9]/, "Missing one special character"),
    
    confirmPassword: z
    .string(),
    
    number: z
    .string({required_error: "Mobile Number is required"})
    .regex(/^[0-9]{10}$/, "numbers 0 -> 9"),    

    city: z
    .string({
        required_error: "City is required"
    }),

    avatar: z
    .any()
    .refine((files) => files?.length === 1, "Avatar image is required")
    .refine((files) => files?.[0]?.size <= 5_000_000, "5MB is maximum size")
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), "image/jpeg, image/jpg, image/png, image/webp")

}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
});

export const EditProfileSchema = z.object({
    userName: z
    .string({
        required_error: "Name is required"
    })
    .min(3, "Name too short")
    .max(30, "Name too long"),

    email: z
    .string({
        required_error: "Email is required"
    })
    .email("Invalid email"),
    
    number: z
    .string({required_error: "Mobile Number is required"})
    .regex(/^[0-9]{10}$/, "numbers 0 -> 9"),

    country: z
    .string({
        required_error: "Country is required"
    }),

    city: z
    .string({
        required_error: "City is required"
    }),

    avatar: z
    .any()
    .refine((files) => files?.length === 1, "Avatar image is required")
    .refine((files) => files?.[0]?.size <= 5_000_000, "5MB is maximum size")
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), "image/jpeg, image/jpg, image/png, image/webp")

});

export const LoginUserSchema = z.object({
    email: z.string({
        required_error: "Email is required"
    }).email(),
    password: z.string({
        required_error: "Password is required"
    }).min(8).max(16)
    .regex(/[A-Z]/, "Missing one uppercase letter")
    .regex(/[a-z]/, "Missing one lowercase letter")
    .regex(/[0-9]/, "Missing one number")
    .regex(/[^A-Za-z0-9]/, "Missing one special character"),
});

export const AddProductSchema = z.object({
    status: z
    .string({
        required_error: "Status is required"
    }),

    brand: z
    .string({
        required_error: "Brand is required"
    }),

    model: z
    .string({
        required_error: "Model is required"
    }),

    year: z
    .string({
        required_error: "Year is required"
    })
    .length(4, "Length must be 4 numbers")
    .regex(/[0-9]/, "numbers 0 -> 9"),

    kilometers: z
    .string({
        required_error: "Kilometers is required"
    })
    .regex(/[0-9]/, "numbers 0 -> 9"),

    transmission: z
    .string({
        required_error: "Transmission is required"
    }),
    
    fuelType: z
    .string({
        required_error: "Fuel type is required"
    }),

    engineSize: z
    .string({
        required_error: "Engine size is required"
    })
    .regex(/[0-9]/, "numbers 0 -> 9"),

    color: z
    .string({
        required_error: "Color is required"
    }),

    price: z
    .string({
        required_error: "Price is required"
    })

});

export const AddReviewSchema = z.object({
    userName: z
    .string({required_error: "Name is required"})
    .min(3),

    phoneNumber: z
    .string({ required_error: "Phone number is requried"})
    .regex(/^[0-9]{10}$/, "numbers 0 -> 9"),

    content: z
    .string({ required_error: "Content is requried"})
    .min(5),

});