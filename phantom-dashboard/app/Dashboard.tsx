import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BarChart3, FileText, Rocket, TrendingUp } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Phantom Dashboard</h1>
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="grid w-full grid-cols-4 gap-2">
          <TabsTrigger value="posts">
            <FileText className="w-4 h-4 mr-2" /> المنشورات
          </TabsTrigger>
          <TabsTrigger value="products">
            <Rocket className="w-4 h-4 mr-2" /> المنتجات
          </TabsTrigger>
          <TabsTrigger value="stats">
            <TrendingUp className="w-4 h-4 mr-2" /> الإحصائيات
          </TabsTrigger>
          <TabsTrigger value="tracking">
            <BarChart3 className="w-4 h-4 mr-2" /> تتبع الأداء
          </TabsTrigger>
        </TabsList>

        <TabsContent value="posts">
          <Card>
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">📝 المنشورات اليومية</h2>
              <p>توثيق يومي للمنشورات المنشورة على حساب X، مع عدد الانطباعات والروابط المرتبطة بها.</p>
              <Button variant="outline">+ إضافة منشور جديد</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products">
          <Card>
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">🚀 المنتجات الرقمية</h2>
              <p>كل منتج رقمي أو رابط أفلييت يمكن ربطه بمنشور أو صفحة هبوط.</p>
              <Button variant="outline">+ إضافة منتج</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stats">
          <Card>
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">📊 الإحصائيات العامة</h2>
              <p>تتبع نمو الحساب: عدد المتابعين، التفاعل، ونسبة التحويل من الروابط.</p>
              <Button variant="outline">تحميل تقرير أسبوعي</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tracking">
          <Card>
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">📈 تتبع الأداء</h2>
              <p>ربط تلقائي مستقبلي بـ Google Sheets أو Airtable لمتابعة الأرباح والتفاعل في الزمن الحقيقي.</p>
              <Button variant="outline">تهيئة ربط خارجي</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

