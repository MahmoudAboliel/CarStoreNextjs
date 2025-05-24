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
    .string()
    .min(3, "الاسم قصير جداً")
    .max(17, "الاسم طويل جداً"),

    email: z
    .string({
        required_error: "الإيميل مطلوب"
    })
    .email("الإيميل خاطئ"),

    password: z
    .string({
        required_error: "كلمة السر مطلوبة"
    })
    .min(8, "الطول يجب أن يكون 8 محارف")
    .max(16)
    .regex(/[A-Z]/, "حرف كبير على الأقل")
    .regex(/[a-z]/, "حرف صغير على الأقل")
    .regex(/[0-9]/, "رقم على الأقل")
    .regex(/[^A-Za-z0-9]/, "محرف خاص على الأقل"),
    
    confirmPassword: z
    .string(),
    
    number: z
    .string({required_error: "رقم التواصل مطلوب"})
    .regex(/^[0-9]{10}$/, "يجب إدخال عشر أرقام"),    

    city: z
    .string({
        required_error: "المدينة مطلوبة"
    }).min(3, 'المدينة مطلوبة').max(17, 'طويلة جداً'),

    avatar: z
    .any()
    .refine((files) => files?.length === 1, "صورة الملف الشخصي مطلوبة")
    .refine((files) => files?.[0]?.size <= 5_000_000, "5MB الحجم الأعظمي")
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), "image/jpeg, image/jpg, image/png, image/webp")

}).refine((data) => data.password === data.confirmPassword, {
    message: "كلمات السر غير متطابقة",
    path: ["confirmPassword"]
});

export const EditProfileSchema = z.object({
    userName: z
    .string({
        required_error: "الاسم مطلوب"
    })
    .min(3, "الاسم قصير جداً")
    .max(17, "الاسم طويل جداً"),

    email: z
    .string({
        required_error: "الإيميل مطلوب"
    })
    .email("إيميل خاطئ"),
    
    number: z
    .string({required_error: "رقم التواصل مطلوب"})
    .regex(/^[0-9]{10}$/, "يجب إدخال عشر أرقام"),

    city: z
    .string({
        required_error: "المدينة مطلوبة"
    }).min(3, 'المدينة مطلوبة').max(17, 'طويلة جداً'),

    avatar: z
    .any()
    .refine((files) => files?.length === 1, "صورة الملف الشخصي مطلوبة")
    .refine((files) => files?.[0]?.size <= 5_000_000, "5MB الحجم الأعظمي")
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), "image/jpeg, image/jpg, image/png, image/webp")

});

export const LoginUserSchema = z.object({
    email: z.string({
        required_error: "الإيميل مطلوب"
    }).email('الإيميل خاطئ'),
    password: z.string({
        required_error: "كلمة السر مطلوبة"
    }).min(8).max(16)
    .regex(/[A-Z]/, "حرف كبير على الأقل")
    .regex(/[a-z]/, "حرف صغير على الأقل")
    .regex(/[0-9]/, "رقم على الأقل")
    .regex(/[^A-Za-z0-9]/, "محرف خاص على الأقل"),
});

export const EditSettingsSchema = z.object({
    siteName: z
    .string({
        required_error: "اسم الموقع مطلوب"
    }),

    description: z
    .string({
        required_error: "الوصف مطلوب"
    }),

    text1: z
    .string({
        required_error: "النص الأول مطلوب"
    }),

    text2: z
    .string({
        required_error: "النص الثاني مطلوب"
    }),

    text3: z
    .string({
        required_error: "النص الثالث مطلوب"
    }),

    facebook: z
    .string({
        required_error: "facebook مطلوب"
    }).url('الرابط خاطئ'),
    instagram: z
    .string({
        required_error: "instagram مطلوب"
    }).url('الرابط خاطئ'),
    whatsapp: z
    .string({
        required_error: "whatsapp مطلوب"
    }).url('الرابط خاطئ'),

    logo: z
    .any()
    .refine((files) => files?.length === 1, "صورة الشعار مطلوبة")
    .refine((files) => files?.[0]?.size <= 5_000_000, "5MB الحجم الاعظمي")
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), "image/jpeg, image/jpg, image/png, image/webp"),
    
    favicon: z
    .any()
    .refine((files) => files?.length === 1, "favicon مطلوبة")
    .refine((files) => files?.[0]?.size <= 5_000_000, "5MB الحجم الاعظمي")
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), "image/jpeg, image/jpg, image/png, image/webp"),
    
    img1: z
    .any()
    .refine((files) => files?.length === 1, "الصورة الأولى مطلوبة")
    .refine((files) => files?.[0]?.size <= 5_000_000, "5MB الحجم الاعظمي")
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), "image/jpeg, image/jpg, image/png, image/webp"),
    
    img2: z
    .any()
    .refine((files) => files?.length === 1, "الصورة الثانية مطلوبة")
    .refine((files) => files?.[0]?.size <= 5_000_000, "5MB الحجم الاعظمي")
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), "image/jpeg, image/jpg, image/png, image/webp"),
    
    img3: z
    .any()
    .refine((files) => files?.length === 1, "الصورة الثالثة مطلوبة")
    .refine((files) => files?.[0]?.size <= 5_000_000, "5MB الحجم الاعظمي")
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), "image/jpeg, image/jpg, image/png, image/webp"),


});

export const AddProductSchema = z.object({
    status: z
    .string({
        required_error: "الحالة مطلوبة"
    }),

    brand: z
    .string({
        required_error: "الماركة مطلوبة"
    }).min(2, 'الماركة مطلوبة'),

    model: z
    .string({
        required_error: "الموديل مطلوب"
    }).min(2, 'الموديل مطلوبة'),

    year: z
    .string({
        required_error: "سنة الصنع مطلوبة"
    })
    .regex(/^[0-9]{4}$/, "يجب إدخال أربعة أرقام"),

    kilometers: z
    .string({
        required_error: "عدد الكيلومترات مطلوب"
    })
    .regex(/[0-9]/, "يجب إدخال أرقام"),

    transmission: z
    .string({
        required_error: "نوع النظام مطلوب"
    }),
    
    fuelType: z
    .string({
        required_error: "نوع الوقود مطلوب"
    }),

    engineSize: z
    .string({
        required_error: "حجم المحرك مطلوب"
    })
    .regex(/[0-9]/, "يجب إدخال أرقام"),

    color: z
    .string({
        required_error: "اللون مطلوب"
    }).min(2, 'اللون مطلوب'),

    price: z
    .string({
        required_error: "السعر مطلوب"
    })
    .regex(/[0-9]/, "يجب إدخال أرقام"),

    description: z
    .string({
        required_error: "الوصف مطلوب"
    }).min(3, 'الوصف مطلوب'),

    city: z
    .string({
        required_error: "الوصف مطلوب"
    }).min(3, 'المدينة مطلوبة'),

    img1: z
    .any()
    .refine((files) => files?.length === 1, "الصورة مطلوبة")
    .refine((files) => files?.[0]?.size <= 5_000_000, "5MB الحجم الأعظمي")
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), "image/jpeg, image/jpg, image/png, image/webp"),
    
    img2: z
    .any()
    .refine((files) => files?.length === 1, "الصورة مطلوبة")
    .refine((files) => files?.[0]?.size <= 5_000_000, "5MB الحجم الأعظمي")
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), "image/jpeg, image/jpg, image/png, image/webp"),
    
    img3: z
    .any()
    .refine((files) => files?.length === 1, "الصورة مطلوبة")
    .refine((files) => files?.[0]?.size <= 5_000_000, "5MB الحجم الأعظمي")
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), "image/jpeg, image/jpg, image/png, image/webp"),


});

export const AddReviewSchema = z.object({
    userName: z
    .string({required_error: "الاسم مطلوب"})
    .min(3, 'قصير جداً'),

    phoneNumber: z
    .string({ required_error: "رقم الهاتف مطلوب"})
    .regex(/^[0-9]{10}$/, "يجب إدخال أرقام"),

    content: z
    .string({ required_error: "المحتوى مطلوب"})
    .min(1, 'المحتوى مطلوب'),

});

export const AddAdSchema = z.object({
    title: z
    .string({required_error: "العنوان مطلوب"})
    .min(3, 'العنوان مطلوب أكثر من ثلاثة محارف'),

    description: z
    .string({ required_error: "الوصف مطلوب"})
    .min(3, 'الوصف مطلوب أكثر من ثلاثة محارف'),

    startDate: z
    .string({ required_error: "تاريخ البداية مطلوب"}),
    
    endDate: z
    .string({ required_error: "تاريخ الإنتهاء مطلوب"}),
    
    url: z
    .string({ required_error: "الرابط مطلوب"})
    .url('الرابط خاطئ'),

    img: z
    .any()
    .refine((files) => files?.length === 1, "الصورة مطلوبة")
    .refine((files) => files?.[0]?.size <= 5_000_000, "5MB الحجم الأعظمي")
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), "image/jpeg, image/jpg, image/png, image/webp"),
    
})