# Generated by Django 5.0.6 on 2024-05-17 17:58

import django.contrib.auth.models
import django.contrib.auth.validators
import django.db.models.deletion
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Butterfly',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('series', models.BigIntegerField()),
                ('rep', models.BigIntegerField()),
                ('repos', models.BigIntegerField()),
                ('poids', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('minu', models.BigIntegerField()),
                ('km', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Curl',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('series', models.BigIntegerField()),
                ('rep', models.BigIntegerField()),
                ('repos', models.BigIntegerField()),
                ('poids', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='DC',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('series', models.BigIntegerField()),
                ('rep', models.BigIntegerField()),
                ('repos', models.BigIntegerField()),
                ('poids', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Dips',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('series', models.BigIntegerField()),
                ('rep', models.BigIntegerField()),
                ('repos', models.BigIntegerField()),
                ('poids', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Fente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('series', models.BigIntegerField()),
                ('rep', models.BigIntegerField()),
                ('repos', models.BigIntegerField()),
                ('poids', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Marteau',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('series', models.BigIntegerField()),
                ('rep', models.BigIntegerField()),
                ('repos', models.BigIntegerField()),
                ('poids', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Squat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('series', models.BigIntegerField()),
                ('rep', models.BigIntegerField()),
                ('repos', models.BigIntegerField()),
                ('poids', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Tirage_horizontal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('series', models.BigIntegerField()),
                ('rep', models.BigIntegerField()),
                ('repos', models.BigIntegerField()),
                ('poids', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Tirage_pouli',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('series', models.BigIntegerField()),
                ('rep', models.BigIntegerField()),
                ('repos', models.BigIntegerField()),
                ('poids', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Traction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('series', models.BigIntegerField()),
                ('rep', models.BigIntegerField()),
                ('repos', models.BigIntegerField()),
                ('poids', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Exo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('butterfly', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='JourneyTraining.butterfly')),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='JourneyTraining.course')),
                ('curl', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='JourneyTraining.curl')),
                ('dc', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='JourneyTraining.dc')),
                ('dips', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='JourneyTraining.dips')),
                ('fente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='JourneyTraining.fente')),
                ('marteau', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='JourneyTraining.marteau')),
                ('squat', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='JourneyTraining.squat')),
                ('tirage_horizontal', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='JourneyTraining.tirage_horizontal')),
                ('tirage_pouli', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='JourneyTraining.tirage_pouli')),
                ('traction', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='JourneyTraining.traction')),
            ],
        ),
        migrations.CreateModel(
            name='UserModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='email address')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('poids', models.FloatField()),
                ('taille', models.FloatField(help_text='En cm')),
                ('exo', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='JourneyTraining.exo')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
    ]