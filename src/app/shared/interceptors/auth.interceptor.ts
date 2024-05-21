import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UserService } from '../services/user.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const userService = inject(UserService); // ניתן להזריק את הסרויס רק כך כי אנו לא נמצאים בתוך מחלקה
  const token = userService.token;

  if (token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }, // שינוי/הוספת הידר
    });
  }

  return next(req); // שולח לשרת את הבקשה החדשה עם הטוקן
};
