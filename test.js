
  
  function transformCarData(backendData) {
    // تحديد إذا كانت السيارة جديدة بناءً على الكيلومترات أو تاريخ الإضافة
    const isNewCar = backendData.kiloMetrage < 1000 || 
                    (new Date().getTime() - new Date(backendData.createDate).getTime()) < 30 * 24 * 60 * 60 * 1000; // أقل من 30 يوم
    
    return {
      imageUrl: backendData.img1, // يمكنك استخدام img1 كصورة رئيسية
      brand: backendData.brand.trim(), // استخدام trim() لإزالة المسافات الزائدة
      price: `$${backendData.price.toLocaleString()}`, // تنسيق السعر
      isNew: isNewCar,
      attributes: {
        system: backendData.transmission.trim(),
        model: `${backendData.brand.trim()} ${backendData.model.trim()} ${backendData.year.trim()}`,
        kilometers: `${backendData.kiloMetrage.toLocaleString()} km`,
        fuel: backendData.fuel.trim(),
        engine: backendData.engine.trim(),
        color: backendData.color.trim(),
      },
      detailsLink: `/cars/${backendData.id}`, // إنشاء رابط التفاصيل باستخدام الـ ID
    };
  }

  // مثال لاستخدام الدالة
const backendData = {
    "id": 0,
    "userId": "1884c465-932f-4754-bc41-eedb2edcc257",
    "brand": "BMW",
    "model": "X5",
    "status": "Available",
    "kiloMetrage": 50000,
    "transmission": "Automatic",
    "fuel": "Diesel    ",
    "engine": "V6          ",
    "year": "2020        ",
    "price": 45000,
    "img1": "image1.jpg",
    "img2": "image2.jpg",
    "img3": "image3.jpg",
    "description": "Luxury SUV with top-notch features.",
    "sold": 0,
    "color": "Black     ",
    "country": "Germany   ",
    "city": "Berlin         ",
    "createDate": "2025-04-12T14:14:46.913",
    "updateDate": null
  };
  
  const frontendData = transformCarData(backendData);
  
  console.log(frontendData);